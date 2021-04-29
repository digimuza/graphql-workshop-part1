import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyUserUpdateManyMutationInput } from "../../../inputs/CompanyUserUpdateManyMutationInput";
import { CompanyUserWhereInput } from "../../../inputs/CompanyUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCompanyUserArgs {
  @TypeGraphQL.Field(_type => CompanyUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: CompanyUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CompanyUserWhereInput, {
    nullable: true
  })
  where?: CompanyUserWhereInput | undefined;
}
