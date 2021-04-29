import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DrumRelationFilter } from "../inputs/DrumRelationFilter";
import { LocationRelationFilter } from "../inputs/LocationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryWhereInput {
  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereInput], {
    nullable: true
  })
  AND?: DrumStateHistoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereInput], {
    nullable: true
  })
  OR?: DrumStateHistoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereInput], {
    nullable: true
  })
  NOT?: DrumStateHistoryWhereInput[] | undefined;

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
  drumId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DrumRelationFilter, {
    nullable: true
  })
  drum?: DrumRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  state?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  locationId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => LocationRelationFilter, {
    nullable: true
  })
  location?: LocationRelationFilter | undefined;
}
