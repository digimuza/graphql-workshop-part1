import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { CompanyEntity } from '../entity/CompanyEntity';
import { getRepository } from 'typeorm';
import { MyContext as ReqContext } from '../graphql-types/MyContext';
import { UserEntity } from '../entity/UserEntity';
import { isAuth } from "../middleware/isAuth";
import { LocationCoordinates } from '../graphql-types/LocationCoordinates';
import { createBaseResponse, ResponseError } from '../_helpers';
import { isArgsValid } from '../middleware/isArgsValid';
import { ApolloError } from 'apollo-server-core';
import { userNotFoundError } from '../_helpers/errors';

const UpdateCompanyResponse = createBaseResponse(CompanyEntity)
const CreateCompanyResponse = createBaseResponse(CompanyEntity)

@InputType()
class CreateCompanyInput {
    @Field()
    name: string;

    @Field()
    address: string;

    @Field()
    location: LocationCoordinates;
}

@InputType()
class UpdateCompanyInput implements Partial<CreateCompanyInput> {
    @Field()
    id: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    address?: string;

    @Field(() => LocationCoordinates, { nullable: true })
    location?: LocationCoordinates;
}

@Resolver(CompanyEntity)
export class CompanyResolver {
    @Query(() => CompanyEntity, { nullable: true })
    @UseMiddleware(isArgsValid)
    company(@Arg("companyId") companyId: string) {
        const companyRepository = getRepository(CompanyEntity)
        return companyRepository.findOne(companyId);
    }

    @Mutation(() => CompanyEntity)
    @UseMiddleware(isArgsValid, isAuth)
    async createCompany(@Arg("data") data: CreateCompanyInput, @Ctx() context: ReqContext) {
        const companyRepository = getRepository(CompanyEntity)
        const userRepository = getRepository(UserEntity)
        const userId = context.req.session.userId;
        const owner = await userRepository.findOne(userId)
        if (owner == null) throw userNotFoundError(userId)

        const company = await companyRepository.save({
            name: data.name,
            location: {
                owner,
                address: data.address,
                name: data.name
            }
        })
        return company;
    }

    @Mutation(() => CompanyEntity)
    @UseMiddleware(isArgsValid, isAuth)
    async updateCompany(@Arg("data") data: UpdateCompanyInput, @Ctx() context: ReqContext): Promise<CompanyEntity> {
        const companyRepository = getRepository(CompanyEntity)
        const userRepository = getRepository(UserEntity)
        const userId = context.req.session.userId
        const owner = await userRepository.findOne(context.req.session.userId)
        if (owner == null) throw userNotFoundError(userId)

        const company = await companyRepository.save({
            id: data.id,
            name: data.name,
            owner: { id: owner.id }
        })
        return company
    }
}



