import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMarketplacesInput } from "../inputs/UserCreateOrConnectWithoutMarketplacesInput";
import { UserCreateWithoutMarketplacesInput } from "../inputs/UserCreateWithoutMarketplacesInput";
import { UserUpdateWithoutMarketplacesInput } from "../inputs/UserUpdateWithoutMarketplacesInput";
import { UserUpsertWithoutMarketplacesInput } from "../inputs/UserUpsertWithoutMarketplacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutMarketplacesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMarketplacesInput, {
    nullable: true
  })
  create?: UserCreateWithoutMarketplacesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMarketplacesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMarketplacesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMarketplacesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMarketplacesInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutMarketplacesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMarketplacesInput | undefined;
}
