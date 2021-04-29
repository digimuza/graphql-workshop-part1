import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserCreateWithoutDrumStateHistoryUpdatesInput";
import { UserUpdateWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserUpdateWithoutDrumStateHistoryUpdatesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutDrumStateHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDrumStateHistoryUpdatesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDrumStateHistoryUpdatesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDrumStateHistoryUpdatesInput, {
    nullable: false
  })
  create!: UserCreateWithoutDrumStateHistoryUpdatesInput;
}
