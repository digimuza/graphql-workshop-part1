import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumMovementHistoryUpdateManyMutationInput } from "../../../inputs/DrumMovementHistoryUpdateManyMutationInput";
import { DrumMovementHistoryWhereInput } from "../../../inputs/DrumMovementHistoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDrumMovementHistoryArgs {
  @TypeGraphQL.Field(_type => DrumMovementHistoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrumMovementHistoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereInput, {
    nullable: true
  })
  where?: DrumMovementHistoryWhereInput | undefined;
}
