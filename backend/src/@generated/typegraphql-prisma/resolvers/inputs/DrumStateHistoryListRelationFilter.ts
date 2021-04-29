import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryWhereInput } from "../inputs/DrumStateHistoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryListRelationFilter {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereInput, {
    nullable: true
  })
  every?: DrumStateHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryWhereInput, {
    nullable: true
  })
  some?: DrumStateHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryWhereInput, {
    nullable: true
  })
  none?: DrumStateHistoryWhereInput | undefined;
}
