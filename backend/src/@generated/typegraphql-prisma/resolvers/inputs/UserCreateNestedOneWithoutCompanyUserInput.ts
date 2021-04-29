import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCompanyUserInput } from "../inputs/UserCreateOrConnectWithoutCompanyUserInput";
import { UserCreateWithoutCompanyUserInput } from "../inputs/UserCreateWithoutCompanyUserInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutCompanyUserInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCompanyUserInput, {
    nullable: true
  })
  create?: UserCreateWithoutCompanyUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCompanyUserInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCompanyUserInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
