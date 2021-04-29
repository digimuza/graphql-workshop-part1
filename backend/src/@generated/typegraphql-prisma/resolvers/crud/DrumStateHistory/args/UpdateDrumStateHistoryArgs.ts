import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumStateHistoryUpdateInput } from "../../../inputs/DrumStateHistoryUpdateInput";
import { DrumStateHistoryWhereUniqueInput } from "../../../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDrumStateHistoryArgs {
  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateInput, {
    nullable: false
  })
  data!: DrumStateHistoryUpdateInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumStateHistoryWhereUniqueInput;
}
