import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCompanyUserInput } from "../inputs/UserCreateWithoutCompanyUserInput";
import { UserUpdateWithoutCompanyUserInput } from "../inputs/UserUpdateWithoutCompanyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCompanyUserInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCompanyUserInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCompanyUserInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCompanyUserInput, {
    nullable: false
  })
  create!: UserCreateWithoutCompanyUserInput;
}
