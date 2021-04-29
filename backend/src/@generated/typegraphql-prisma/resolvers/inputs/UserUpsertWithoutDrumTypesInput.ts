import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDrumTypesInput } from "../inputs/UserCreateWithoutDrumTypesInput";
import { UserUpdateWithoutDrumTypesInput } from "../inputs/UserUpdateWithoutDrumTypesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutDrumTypesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDrumTypesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDrumTypesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDrumTypesInput, {
    nullable: false
  })
  create!: UserCreateWithoutDrumTypesInput;
}
