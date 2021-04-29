import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryWhereInput } from "../inputs/DrumMovementHistoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryListRelationFilter {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereInput, {
    nullable: true
  })
  every?: DrumMovementHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereInput, {
    nullable: true
  })
  some?: DrumMovementHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereInput, {
    nullable: true
  })
  none?: DrumMovementHistoryWhereInput | undefined;
}
