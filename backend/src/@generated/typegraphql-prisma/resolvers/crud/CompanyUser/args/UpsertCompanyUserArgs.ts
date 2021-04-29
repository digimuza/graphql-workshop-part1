import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyUserCreateInput } from "../../../inputs/CompanyUserCreateInput";
import { CompanyUserUpdateInput } from "../../../inputs/CompanyUserUpdateInput";
import { CompanyUserWhereUniqueInput } from "../../../inputs/CompanyUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCompanyUserArgs {
  @TypeGraphQL.Field(_type => CompanyUserWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUserCreateInput, {
    nullable: false
  })
  create!: CompanyUserCreateInput;

  @TypeGraphQL.Field(_type => CompanyUserUpdateInput, {
    nullable: false
  })
  update!: CompanyUserUpdateInput;
}
