import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMarketplacesInput } from "../inputs/UserCreateWithoutMarketplacesInput";
import { UserUpdateWithoutMarketplacesInput } from "../inputs/UserUpdateWithoutMarketplacesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutMarketplacesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMarketplacesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMarketplacesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMarketplacesInput, {
    nullable: false
  })
  create!: UserCreateWithoutMarketplacesInput;
}
