import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumTypeUpdateInput } from "../../../inputs/DrumTypeUpdateInput";
import { DrumTypeWhereUniqueInput } from "../../../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDrumTypeArgs {
  @TypeGraphQL.Field(_type => DrumTypeUpdateInput, {
    nullable: false
  })
  data!: DrumTypeUpdateInput;

  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DrumTypeWhereUniqueInput;
}
