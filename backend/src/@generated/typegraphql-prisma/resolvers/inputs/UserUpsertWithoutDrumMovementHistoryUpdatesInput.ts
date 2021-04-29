import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/UserCreateWithoutDrumMovementHistoryUpdatesInput";
import { UserUpdateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/UserUpdateWithoutDrumMovementHistoryUpdatesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutDrumMovementHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDrumMovementHistoryUpdatesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: false
  })
  create!: UserCreateWithoutDrumMovementHistoryUpdatesInput;
}
