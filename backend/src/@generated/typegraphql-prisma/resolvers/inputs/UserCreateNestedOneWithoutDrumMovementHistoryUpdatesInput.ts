import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDrumMovementHistoryUpdatesInput } from "../inputs/UserCreateOrConnectWithoutDrumMovementHistoryUpdatesInput";
import { UserCreateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/UserCreateWithoutDrumMovementHistoryUpdatesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  create?: UserCreateWithoutDrumMovementHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDrumMovementHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
