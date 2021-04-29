import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DrumMovementHistoryListRelationFilter } from "../inputs/DrumMovementHistoryListRelationFilter";
import { DrumStateHistoryListRelationFilter } from "../inputs/DrumStateHistoryListRelationFilter";
import { DrumTypeRelationFilter } from "../inputs/DrumTypeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumWhereInput {
  @TypeGraphQL.Field(_type => [DrumWhereInput], {
    nullable: true
  })
  AND?: DrumWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumWhereInput], {
    nullable: true
  })
  OR?: DrumWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumWhereInput], {
    nullable: true
  })
  NOT?: DrumWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  drumTypeId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DrumTypeRelationFilter, {
    nullable: true
  })
  drumType?: DrumTypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryListRelationFilter, {
    nullable: true
  })
  drumStateHistoryUpdates?: DrumStateHistoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DrumMovementHistoryListRelationFilter, {
    nullable: true
  })
  drumMovementHistoryUpdates?: DrumMovementHistoryListRelationFilter | undefined;
}
