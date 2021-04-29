import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyListRelationFilter } from "../inputs/CompanyListRelationFilter";
import { CompanyUserListRelationFilter } from "../inputs/CompanyUserListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DrumListRelationFilter } from "../inputs/DrumListRelationFilter";
import { DrumMovementHistoryListRelationFilter } from "../inputs/DrumMovementHistoryListRelationFilter";
import { DrumStateHistoryListRelationFilter } from "../inputs/DrumStateHistoryListRelationFilter";
import { DrumTypeListRelationFilter } from "../inputs/DrumTypeListRelationFilter";
import { LocationListRelationFilter } from "../inputs/LocationListRelationFilter";
import { MarketplaceListRelationFilter } from "../inputs/MarketplaceListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  fullName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CompanyListRelationFilter, {
    nullable: true
  })
  companies?: CompanyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationListRelationFilter, {
    nullable: true
  })
  locations?: LocationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MarketplaceListRelationFilter, {
    nullable: true
  })
  marketplaces?: MarketplaceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DrumListRelationFilter, {
    nullable: true
  })
  drums?: DrumListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DrumTypeListRelationFilter, {
    nullable: true
  })
  drumTypes?: DrumTypeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryListRelationFilter, {
    nullable: true
  })
  drumStateHistoryUpdates?: DrumStateHistoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DrumMovementHistoryListRelationFilter, {
    nullable: true
  })
  drumMovementHistoryUpdates?: DrumMovementHistoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CompanyUserListRelationFilter, {
    nullable: true
  })
  companyUser?: CompanyUserListRelationFilter | undefined;
}
