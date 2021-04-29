import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumCreateInput } from "../../../inputs/DrumCreateInput";
import { DrumUpdateInput } from "../../../inputs/DrumUpdateInput";
import { DrumWhereUniqueInput } from "../../../inputs/DrumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDrumArgs {
  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: false
  })
  where!: DrumWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumCreateInput, {
    nullable: false
  })
  create!: DrumCreateInput;

  @TypeGraphQL.Field(_type => DrumUpdateInput, {
    nullable: false
  })
  update!: DrumUpdateInput;
}
