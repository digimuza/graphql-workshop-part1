import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyCreateInput } from "../../../inputs/CompanyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyCreateInput, {
    nullable: false
  })
  data!: CompanyCreateInput;
}
