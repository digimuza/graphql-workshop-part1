import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput";
import { UserCreateWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserCreateWithoutDrumStateHistoryUpdatesInput";
import { UserUpdateWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserUpdateWithoutDrumStateHistoryUpdatesInput";
import { UserUpsertWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserUpsertWithoutDrumStateHistoryUpdatesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutDrumStateHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  create?: UserCreateWithoutDrumStateHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutDrumStateHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutDrumStateHistoryUpdatesInput | undefined;
}
