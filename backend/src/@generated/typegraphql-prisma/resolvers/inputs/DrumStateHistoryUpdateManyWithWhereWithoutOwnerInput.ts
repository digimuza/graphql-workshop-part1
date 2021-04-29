import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryScalarWhereInput } from "../inputs/DrumStateHistoryScalarWhereInput";
import { DrumStateHistoryUpdateManyMutationInput } from "../inputs/DrumStateHistoryUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumStateHistoryScalarWhereInput, {
    nullable: false
  })
  where!: DrumStateHistoryScalarWhereInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrumStateHistoryUpdateManyMutationInput;
}
