import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumUpdateInput } from "../../../inputs/DrumUpdateInput";
import { DrumWhereUniqueInput } from "../../../inputs/DrumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDrumArgs {
  @TypeGraphQL.Field(_type => DrumUpdateInput, {
    nullable: false
  })
  data!: DrumUpdateInput;

  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: false
  })
  where!: DrumWhereUniqueInput;
}
