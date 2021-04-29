import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumMovementHistoryCreateInput } from "../../../inputs/DrumMovementHistoryCreateInput";
import { DrumMovementHistoryUpdateInput } from "../../../inputs/DrumMovementHistoryUpdateInput";
import { DrumMovementHistoryWhereUniqueInput } from "../../../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDrumMovementHistoryArgs {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumMovementHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryCreateInput, {
    nullable: false
  })
  create!: DrumMovementHistoryCreateInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryUpdateInput, {
    nullable: false
  })
  update!: DrumMovementHistoryUpdateInput;
}
