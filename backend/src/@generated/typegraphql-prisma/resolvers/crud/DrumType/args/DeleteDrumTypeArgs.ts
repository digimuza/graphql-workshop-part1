import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumTypeWhereUniqueInput } from "../../../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteDrumTypeArgs {
  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DrumTypeWhereUniqueInput;
}
