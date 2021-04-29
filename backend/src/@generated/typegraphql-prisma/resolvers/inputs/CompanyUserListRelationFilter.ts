import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUserWhereInput } from "../inputs/CompanyUserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUserListRelationFilter {
  @TypeGraphQL.Field(_type => CompanyUserWhereInput, {
    nullable: true
  })
  every?: CompanyUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUserWhereInput, {
    nullable: true
  })
  some?: CompanyUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUserWhereInput, {
    nullable: true
  })
  none?: CompanyUserWhereInput | undefined;
}
