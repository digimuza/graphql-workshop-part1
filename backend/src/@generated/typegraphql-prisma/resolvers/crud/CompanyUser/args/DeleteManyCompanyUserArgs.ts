import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyUserWhereInput } from "../../../inputs/CompanyUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCompanyUserArgs {
  @TypeGraphQL.Field(_type => CompanyUserWhereInput, {
    nullable: true
  })
  where?: CompanyUserWhereInput | undefined;
}
