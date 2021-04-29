import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumWhereInput } from "../../../inputs/DrumWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDrumArgs {
  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  where?: DrumWhereInput | undefined;
}
