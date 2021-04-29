import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CompanyUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CompanyUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CompanyUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CompanyUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  ownerId?: StringNullableWithAggregatesFilter | undefined;
}
