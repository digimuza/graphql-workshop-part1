import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDrumsInput } from "../inputs/UserCreateWithoutDrumsInput";
import { UserUpdateWithoutDrumsInput } from "../inputs/UserUpdateWithoutDrumsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutDrumsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDrumsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDrumsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDrumsInput, {
    nullable: false
  })
  create!: UserCreateWithoutDrumsInput;
}
