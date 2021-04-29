import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumStateHistoryWhereInput } from "../../../inputs/DrumStateHistoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDrumStateHistoryArgs {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereInput, {
    nullable: true
  })
  where?: DrumStateHistoryWhereInput | undefined;
}
