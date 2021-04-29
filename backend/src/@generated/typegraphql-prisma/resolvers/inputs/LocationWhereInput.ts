import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyListRelationFilter } from "../inputs/CompanyListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DrumStateHistoryListRelationFilter } from "../inputs/DrumStateHistoryListRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationWhereInput {
  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  AND?: LocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  OR?: LocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  NOT?: LocationWhereInput[] | undefined;

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
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  latitude?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  longitude?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => CompanyListRelationFilter, {
    nullable: true
  })
  companies?: CompanyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryListRelationFilter, {
    nullable: true
  })
  drumStateHistory?: DrumStateHistoryListRelationFilter | undefined;
}
