import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeWhereInput } from "../inputs/DrumTypeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeRelationFilter {
  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  is?: DrumTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  isNot?: DrumTypeWhereInput | undefined;
}
