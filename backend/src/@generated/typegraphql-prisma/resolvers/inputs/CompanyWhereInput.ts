import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LocationRelationFilter } from "../inputs/LocationRelationFilter";
import { MarketplaceListRelationFilter } from "../inputs/MarketplaceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyWhereInput {
  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  AND?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  OR?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  NOT?: CompanyWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  locationId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LocationRelationFilter, {
    nullable: true
  })
  location?: LocationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MarketplaceListRelationFilter, {
    nullable: true
  })
  marketplace?: MarketplaceListRelationFilter | undefined;
}
