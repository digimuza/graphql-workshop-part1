import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { CompanyEntity } from '../entity/CompanyEntity';
import { getRepository } from 'typeorm';
import { MyContext as ReqContext } from '../graphql-types/MyContext';
import { UserEntity } from '../entity/UserEntity';
import { isAuth } from "../middleware/isAuth";
import { createBaseResponse, ResponseError } from '../_helpers';
import { isArgsValid } from '../middleware/isArgsValid';
import { LocationEntity } from '../entity/LocationEntity';
import { LocationCoordinates } from '../graphql-types/LocationCoordinates';
import { userNotFoundError } from '../_helpers/errors';

const UpdateLocationResponse = createBaseResponse(LocationEntity)
const CreateLocationResponse = createBaseResponse(LocationEntity)

@InputType()
class CreateLocationInput {
    @Field()
    name: string;

    @Field()
    address: string;

    @Field()
    location: LocationCoordinates;
}

@InputType()
class UpdateLocationInput implements Partial<CreateLocationInput> {
    @Field()
    id: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    address?: string;

    @Field(() => LocationCoordinates, { nullable: true })
    location?: LocationCoordinates;
}

@Resolver(LocationEntity)
export class LocationResolver {
    @Query(() => LocationEntity, { nullable: true })
    @UseMiddleware(isArgsValid)
    getLocation(@Arg("locationId") locationId: string) {
        const companyRepository = getRepository(CompanyEntity);
        return companyRepository.findOne(locationId);
    }

    @Mutation(() => LocationEntity)
    @UseMiddleware(isArgsValid, isAuth)
    async createLocation(@Arg("data") data: UpdateLocationInput, @Ctx() context: ReqContext) {
        const locationRepository = getRepository(LocationEntity);
        const userRepository = getRepository(UserEntity);
        const owner = await userRepository.findOne(context.req.session.userId);
        if (owner == null) {
            throw new ResponseError().fill({
                message: `User with ${context.req.session.userId} does not exists`
            });
        }

        const location = await locationRepository.save({
            name: data.name,
            address: data.address,
        });
        return CreateLocationResponse.ok(location);
    }

    @Mutation(() => UpdateLocationResponse)
    @UseMiddleware(isArgsValid, isAuth)
    async updateCompany(@Arg("data") data: UpdateLocationInput, @Ctx() context: ReqContext) {
        const locationRepository = getRepository(LocationEntity);
        const userRepository = getRepository(UserEntity);
        const userId = context.req.session.userId;
        const owner = await userRepository.findOne(context.req.session.userId);
        if (owner == null) throw userNotFoundError(userId)

        const location = await locationRepository.save({
            id: data.id,
            name: data.name,

            owner: { id: owner.id }
        });

        return UpdateLocationResponse.ok(location);
    }
}
