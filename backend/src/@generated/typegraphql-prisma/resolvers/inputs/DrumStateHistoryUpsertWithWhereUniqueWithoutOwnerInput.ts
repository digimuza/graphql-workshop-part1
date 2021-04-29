import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateWithoutOwnerInput } from "../inputs/DrumStateHistoryCreateWithoutOwnerInput";
import { DrumStateHistoryUpdateWithoutOwnerInput } from "../inputs/DrumStateHistoryUpdateWithoutOwnerInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumStateHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: DrumStateHistoryUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: DrumStateHistoryCreateWithoutOwnerInput;
}
