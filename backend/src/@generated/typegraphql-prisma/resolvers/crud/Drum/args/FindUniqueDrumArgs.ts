import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumWhereUniqueInput } from "../../../inputs/DrumWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDrumArgs {
  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: false
  })
  where!: DrumWhereUniqueInput;
}
