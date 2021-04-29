import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateWithoutDrumStateHistoryUpdatesInput } from "../inputs/DrumCreateWithoutDrumStateHistoryUpdatesInput";
import { DrumUpdateWithoutDrumStateHistoryUpdatesInput } from "../inputs/DrumUpdateWithoutDrumStateHistoryUpdatesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumUpsertWithoutDrumStateHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => DrumUpdateWithoutDrumStateHistoryUpdatesInput, {
    nullable: false
  })
  update!: DrumUpdateWithoutDrumStateHistoryUpdatesInput;

  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumStateHistoryUpdatesInput, {
    nullable: false
  })
  create!: DrumCreateWithoutDrumStateHistoryUpdatesInput;
}
