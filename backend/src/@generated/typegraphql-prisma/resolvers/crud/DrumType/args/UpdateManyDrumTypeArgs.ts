import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumTypeUpdateManyMutationInput } from "../../../inputs/DrumTypeUpdateManyMutationInput";
import { DrumTypeWhereInput } from "../../../inputs/DrumTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDrumTypeArgs {
  @TypeGraphQL.Field(_type => DrumTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrumTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  where?: DrumTypeWhereInput | undefined;
}
