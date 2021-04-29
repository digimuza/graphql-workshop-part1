import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMarketplacesInput } from "../inputs/UserCreateOrConnectWithoutMarketplacesInput";
import { UserCreateWithoutMarketplacesInput } from "../inputs/UserCreateWithoutMarketplacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutMarketplacesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMarketplacesInput, {
    nullable: true
  })
  create?: UserCreateWithoutMarketplacesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMarketplacesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMarketplacesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
