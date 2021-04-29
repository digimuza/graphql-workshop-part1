import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyUserOrderByInput } from "../../../inputs/CompanyUserOrderByInput";
import { CompanyUserScalarWhereWithAggregatesInput } from "../../../inputs/CompanyUserScalarWhereWithAggregatesInput";
import { CompanyUserWhereInput } from "../../../inputs/CompanyUserWhereInput";
import { CompanyUserScalarFieldEnum } from "../../../../enums/CompanyUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCompanyUserArgs {
  @TypeGraphQL.Field(_type => CompanyUserWhereInput, {
    nullable: true
  })
  where?: CompanyUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserOrderByInput], {
    nullable: true
  })
  orderBy?: CompanyUserOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "ownerId">;

  @TypeGraphQL.Field(_type => CompanyUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CompanyUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
