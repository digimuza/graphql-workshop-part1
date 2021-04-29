import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumUpdateManyMutationInput } from "../../../inputs/DrumUpdateManyMutationInput";
import { DrumWhereInput } from "../../../inputs/DrumWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDrumArgs {
  @TypeGraphQL.Field(_type => DrumUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrumUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  where?: DrumWhereInput | undefined;
}
