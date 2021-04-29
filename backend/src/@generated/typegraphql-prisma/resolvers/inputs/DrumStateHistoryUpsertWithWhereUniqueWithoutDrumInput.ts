import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateWithoutDrumInput } from "../inputs/DrumStateHistoryCreateWithoutDrumInput";
import { DrumStateHistoryUpdateWithoutDrumInput } from "../inputs/DrumStateHistoryUpdateWithoutDrumInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpsertWithWhereUniqueWithoutDrumInput {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumStateHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateWithoutDrumInput, {
    nullable: false
  })
  update!: DrumStateHistoryUpdateWithoutDrumInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryCreateWithoutDrumInput, {
    nullable: false
  })
  create!: DrumStateHistoryCreateWithoutDrumInput;
}
