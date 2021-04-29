import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumStateHistoryUpdateManyMutationInput } from "../../../inputs/DrumStateHistoryUpdateManyMutationInput";
import { DrumStateHistoryWhereInput } from "../../../inputs/DrumStateHistoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDrumStateHistoryArgs {
  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrumStateHistoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryWhereInput, {
    nullable: true
  })
  where?: DrumStateHistoryWhereInput | undefined;
}
