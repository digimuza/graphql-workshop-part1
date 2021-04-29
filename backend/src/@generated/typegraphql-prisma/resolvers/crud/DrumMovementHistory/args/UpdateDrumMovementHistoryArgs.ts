import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumMovementHistoryUpdateInput } from "../../../inputs/DrumMovementHistoryUpdateInput";
import { DrumMovementHistoryWhereUniqueInput } from "../../../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDrumMovementHistoryArgs {
  @TypeGraphQL.Field(_type => DrumMovementHistoryUpdateInput, {
    nullable: false
  })
  data!: DrumMovementHistoryUpdateInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumMovementHistoryWhereUniqueInput;
}
