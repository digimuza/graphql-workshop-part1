import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDrumTypesInput } from "../inputs/UserCreateOrConnectWithoutDrumTypesInput";
import { UserCreateWithoutDrumTypesInput } from "../inputs/UserCreateWithoutDrumTypesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutDrumTypesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDrumTypesInput, {
    nullable: true
  })
  create?: UserCreateWithoutDrumTypesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDrumTypesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDrumTypesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
