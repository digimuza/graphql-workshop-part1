import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyUserCreateInput } from "../../../inputs/CompanyUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCompanyUserArgs {
  @TypeGraphQL.Field(_type => CompanyUserCreateInput, {
    nullable: false
  })
  data!: CompanyUserCreateInput;
}
