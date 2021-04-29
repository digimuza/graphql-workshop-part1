import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DrumMovementHistoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DrumMovementHistoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DrumMovementHistoryScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  drumId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  latitude?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  longitude?: FloatWithAggregatesFilter | undefined;
}
