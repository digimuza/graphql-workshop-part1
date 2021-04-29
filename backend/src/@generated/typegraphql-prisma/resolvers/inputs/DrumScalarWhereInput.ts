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
export class DrumScalarWhereInput {
  @TypeGraphQL.Field(_type => [DrumScalarWhereInput], {
    nullable: true
  })
  AND?: DrumScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumScalarWhereInput], {
    nullable: true
  })
  OR?: DrumScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumScalarWhereInput], {
    nullable: true
  })
  NOT?: DrumScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  drumTypeId?: StringNullableFilter | undefined;
}
