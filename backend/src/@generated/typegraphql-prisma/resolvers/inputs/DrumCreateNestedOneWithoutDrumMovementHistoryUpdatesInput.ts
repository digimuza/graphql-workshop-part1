import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput";
import { DrumCreateWithoutDrumMovementHistoryUpdatesInput } from "../inputs/DrumCreateWithoutDrumMovementHistoryUpdatesInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateNestedOneWithoutDrumMovementHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  create?: DrumCreateWithoutDrumMovementHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  connectOrCreate?: DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: true
  })
  connect?: DrumWhereUniqueInput | undefined;
}
