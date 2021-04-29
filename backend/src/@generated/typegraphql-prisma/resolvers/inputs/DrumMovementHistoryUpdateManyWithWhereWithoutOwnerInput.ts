import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryScalarWhereInput } from "../inputs/DrumMovementHistoryScalarWhereInput";
import { DrumMovementHistoryUpdateManyMutationInput } from "../inputs/DrumMovementHistoryUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumMovementHistoryScalarWhereInput, {
    nullable: false
  })
  where!: DrumMovementHistoryScalarWhereInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrumMovementHistoryUpdateManyMutationInput;
}
