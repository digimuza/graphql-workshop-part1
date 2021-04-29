import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput";
import { UserCreateWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserCreateWithoutDrumStateHistoryUpdatesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutDrumStateHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  create?: UserCreateWithoutDrumStateHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
