import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryCreateWithoutDrumInput } from "../inputs/DrumMovementHistoryCreateWithoutDrumInput";
import { DrumMovementHistoryUpdateWithoutDrumInput } from "../inputs/DrumMovementHistoryUpdateWithoutDrumInput";
import { DrumMovementHistoryWhereUniqueInput } from "../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryUpsertWithWhereUniqueWithoutDrumInput {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumMovementHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryUpdateWithoutDrumInput, {
    nullable: false
  })
  update!: DrumMovementHistoryUpdateWithoutDrumInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryCreateWithoutDrumInput, {
    nullable: false
  })
  create!: DrumMovementHistoryCreateWithoutDrumInput;
}
