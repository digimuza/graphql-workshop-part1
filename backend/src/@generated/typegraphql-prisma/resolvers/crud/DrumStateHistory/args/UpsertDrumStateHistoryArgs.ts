import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumStateHistoryCreateInput } from "../../../inputs/DrumStateHistoryCreateInput";
import { DrumStateHistoryUpdateInput } from "../../../inputs/DrumStateHistoryUpdateInput";
import { DrumStateHistoryWhereUniqueInput } from "../../../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDrumStateHistoryArgs {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumStateHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryCreateInput, {
    nullable: false
  })
  create!: DrumStateHistoryCreateInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateInput, {
    nullable: false
  })
  update!: DrumStateHistoryUpdateInput;
}
