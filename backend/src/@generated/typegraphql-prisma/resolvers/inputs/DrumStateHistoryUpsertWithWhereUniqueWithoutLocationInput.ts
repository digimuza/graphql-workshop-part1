import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateWithoutLocationInput } from "../inputs/DrumStateHistoryCreateWithoutLocationInput";
import { DrumStateHistoryUpdateWithoutLocationInput } from "../inputs/DrumStateHistoryUpdateWithoutLocationInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumStateHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: DrumStateHistoryUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryCreateWithoutLocationInput, {
    nullable: false
  })
  create!: DrumStateHistoryCreateWithoutLocationInput;
}
