import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumStateHistoryCreateInput } from "../../../inputs/DrumStateHistoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDrumStateHistoryArgs {
  @TypeGraphQL.Field(_type => DrumStateHistoryCreateInput, {
    nullable: false
  })
  data!: DrumStateHistoryCreateInput;
}
