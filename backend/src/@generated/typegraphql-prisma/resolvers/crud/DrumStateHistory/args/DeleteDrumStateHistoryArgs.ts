import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumStateHistoryWhereUniqueInput } from "../../../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteDrumStateHistoryArgs {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumStateHistoryWhereUniqueInput;
}
