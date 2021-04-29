import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumMovementHistoryWhereInput } from "../../../inputs/DrumMovementHistoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDrumMovementHistoryArgs {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereInput, {
    nullable: true
  })
  where?: DrumMovementHistoryWhereInput | undefined;
}
