import { IsEmail } from "class-validator";
import { Arg, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { UserEntity } from '../entity/UserEntity';
import * as P from 'ts-prime'
import { createBaseResponse, ResponseError } from '../_helpers';
import { isArgsValid } from "src/middleware/isArgsValid";

const UserSingleResponse = createBaseResponse(UserEntity)

@InputType()
class CreateUserInput {
    @Field(() => String, { nullable: true })
    fullName?: string

    @Field()
    @IsEmail()
    email: string
}

@InputType()
class UserSingleQueryInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    @IsEmail()
    email?: string
}


@Resolver()
export class UserResolver {
    @Query(() => UserSingleResponse)
    @UseMiddleware(isArgsValid)
    async user(@Arg('data') data: UserSingleQueryInput) {
        if (data.email == null && data.id == null) {
            return UserSingleResponse.error({
                status: 400,
                errors: [
                    new ResponseError().fill({
                        message: "Expected to receive at least id or email"
                    })
                ]
            })
        }
        if (data.email) {
            const user = await UserEntity.findOne({
                where: {
                    email: data.email
                }
            })
            return UserSingleResponse.ok(user)
        }

        return UserSingleResponse.ok(await UserEntity.findOne(data.id))
    }

    @Mutation(() => UserSingleResponse)
    @UseMiddleware(isArgsValid)
    async createUser(@Arg("data") data: CreateUserInput) {
        const user = await P.canFail(async () => {
            return await UserEntity.create(data).save()
        })

        if (P.isError(user)) {
            return UserSingleResponse.error({
                status: 500,
                errors: [
                    new ResponseError().fill({
                        message: "Failed to create user."
                    })
                ]
            })
        }

        return UserSingleResponse.ok(user)
    }
}
