import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput } from "../inputs/DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput";
import { DrumCreateWithoutDrumStateHistoryUpdatesInput } from "../inputs/DrumCreateWithoutDrumStateHistoryUpdatesInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  create?: DrumCreateWithoutDrumStateHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  connectOrCreate?: DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: true
  })
  connect?: DrumWhereUniqueInput | undefined;
}
