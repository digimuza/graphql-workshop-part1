import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumCreateWithoutDrumMovementHistoryUpdatesInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: false
  })
  where!: DrumWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: false
  })
  create!: DrumCreateWithoutDrumMovementHistoryUpdatesInput;
}
