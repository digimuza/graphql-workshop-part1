import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarWhereInput], {
    nullable: true
  })
  AND?: DrumMovementHistoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarWhereInput], {
    nullable: true
  })
  OR?: DrumMovementHistoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarWhereInput], {
    nullable: true
  })
  NOT?: DrumMovementHistoryScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  drumId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  latitude?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  longitude?: FloatFilter | undefined;
}
