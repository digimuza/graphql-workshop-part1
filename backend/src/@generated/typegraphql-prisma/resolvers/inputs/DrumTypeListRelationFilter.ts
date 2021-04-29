import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeWhereInput } from "../inputs/DrumTypeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeListRelationFilter {
  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  every?: DrumTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  some?: DrumTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  none?: DrumTypeWhereInput | undefined;
}
