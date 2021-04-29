import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryUpdateWithoutOwnerInput } from "../inputs/DrumMovementHistoryUpdateWithoutOwnerInput";
import { DrumMovementHistoryWhereUniqueInput } from "../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumMovementHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: DrumMovementHistoryUpdateWithoutOwnerInput;
}
