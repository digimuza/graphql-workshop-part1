import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumCreateWithoutDrumMovementHistoryUpdatesInput";
import { DrumUpdateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumUpdateWithoutDrumMovementHistoryUpdatesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumUpsertWithoutDrumMovementHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => DrumUpdateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: false
  })
  update!: DrumUpdateWithoutDrumMovementHistoryUpdatesInput;

  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: false
  })
  create!: DrumCreateWithoutDrumMovementHistoryUpdatesInput;
}
