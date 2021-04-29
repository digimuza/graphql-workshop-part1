import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DrumRelationFilter } from "../inputs/DrumRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryWhereInput {
  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereInput], {
    nullable: true
  })
  AND?: DrumMovementHistoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereInput], {
    nullable: true
  })
  OR?: DrumMovementHistoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereInput], {
    nullable: true
  })
  NOT?: DrumMovementHistoryWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  latitude?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  longitude?: FloatFilter | undefined;
}
