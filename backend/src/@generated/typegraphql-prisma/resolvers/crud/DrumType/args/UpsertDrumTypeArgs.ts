import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumTypeCreateInput } from "../../../inputs/DrumTypeCreateInput";
import { DrumTypeUpdateInput } from "../../../inputs/DrumTypeUpdateInput";
import { DrumTypeWhereUniqueInput } from "../../../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDrumTypeArgs {
  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DrumTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumTypeCreateInput, {
    nullable: false
  })
  create!: DrumTypeCreateInput;

  @TypeGraphQL.Field(_type => DrumTypeUpdateInput, {
    nullable: false
  })
  update!: DrumTypeUpdateInput;
}
