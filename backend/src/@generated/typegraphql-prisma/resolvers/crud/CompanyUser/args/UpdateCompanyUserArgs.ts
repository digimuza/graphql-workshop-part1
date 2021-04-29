import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyUserUpdateInput } from "../../../inputs/CompanyUserUpdateInput";
import { CompanyUserWhereUniqueInput } from "../../../inputs/CompanyUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCompanyUserArgs {
  @TypeGraphQL.Field(_type => CompanyUserUpdateInput, {
    nullable: false
  })
  data!: CompanyUserUpdateInput;

  @TypeGraphQL.Field(_type => CompanyUserWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyUserWhereUniqueInput;
}
