import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCompanyUserInput } from "../inputs/UserCreateNestedOneWithoutCompanyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCompanyUserInput, {
    nullable: true
  })
  owner?: UserCreateNestedOneWithoutCompanyUserInput | undefined;
}
