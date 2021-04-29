import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumMovementHistoryCreateInput } from "../../../inputs/DrumMovementHistoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDrumMovementHistoryArgs {
  @TypeGraphQL.Field(_type => DrumMovementHistoryCreateInput, {
    nullable: false
  })
  data!: DrumMovementHistoryCreateInput;
}
