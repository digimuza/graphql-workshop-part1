import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumCreateInput } from "../../../inputs/DrumCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDrumArgs {
  @TypeGraphQL.Field(_type => DrumCreateInput, {
    nullable: false
  })
  data!: DrumCreateInput;
}
