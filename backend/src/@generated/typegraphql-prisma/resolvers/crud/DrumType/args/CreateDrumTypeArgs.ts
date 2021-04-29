import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumTypeCreateInput } from "../../../inputs/DrumTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDrumTypeArgs {
  @TypeGraphQL.Field(_type => DrumTypeCreateInput, {
    nullable: false
  })
  data!: DrumTypeCreateInput;
}
