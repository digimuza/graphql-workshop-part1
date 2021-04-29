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
export class DrumScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DrumScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DrumScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DrumScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DrumScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  drumTypeId?: StringNullableWithAggregatesFilter | undefined;
}
