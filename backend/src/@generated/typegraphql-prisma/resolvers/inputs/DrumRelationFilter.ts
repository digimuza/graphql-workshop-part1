import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumWhereInput } from "../inputs/DrumWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumRelationFilter {
  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  is?: DrumWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  isNot?: DrumWhereInput | undefined;
}
