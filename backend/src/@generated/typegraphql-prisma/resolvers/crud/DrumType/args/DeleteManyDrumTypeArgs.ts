import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumTypeWhereInput } from "../../../inputs/DrumTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDrumTypeArgs {
  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  where?: DrumTypeWhereInput | undefined;
}
