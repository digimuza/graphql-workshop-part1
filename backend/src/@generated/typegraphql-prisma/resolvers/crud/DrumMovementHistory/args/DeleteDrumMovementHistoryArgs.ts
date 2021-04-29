import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumMovementHistoryWhereUniqueInput } from "../../../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteDrumMovementHistoryArgs {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumMovementHistoryWhereUniqueInput;
}
