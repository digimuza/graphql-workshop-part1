import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [CompanyUserScalarWhereInput], {
    nullable: true
  })
  AND?: CompanyUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserScalarWhereInput], {
    nullable: true
  })
  OR?: CompanyUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserScalarWhereInput], {
    nullable: true
  })
  NOT?: CompanyUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ownerId?: StringNullableFilter | undefined;
}
