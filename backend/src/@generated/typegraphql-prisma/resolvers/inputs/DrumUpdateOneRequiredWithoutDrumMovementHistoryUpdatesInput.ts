import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput";
import { DrumCreateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumCreateWithoutDrumMovementHistoryUpdatesInput";
import { DrumUpdateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumUpdateWithoutDrumMovementHistoryUpdatesInput";
import { DrumUpsertWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumUpsertWithoutDrumMovementHistoryUpdatesInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumUpdateOneRequiredWithoutDrumMovementHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  create?: DrumCreateWithoutDrumMovementHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  connectOrCreate?: DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => DrumUpsertWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  upsert?: DrumUpsertWithoutDrumMovementHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: true
  })
  connect?: DrumWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DrumUpdateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  update?: DrumUpdateWithoutDrumMovementHistoryUpdatesInput | undefined;
}
