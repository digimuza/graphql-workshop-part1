import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyUserWhereUniqueInput } from "../../../inputs/CompanyUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCompanyUserArgs {
  @TypeGraphQL.Field(_type => CompanyUserWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyUserWhereUniqueInput;
}
