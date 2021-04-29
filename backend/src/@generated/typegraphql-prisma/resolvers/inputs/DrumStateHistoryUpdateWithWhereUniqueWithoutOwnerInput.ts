import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryUpdateWithoutOwnerInput } from "../inputs/DrumStateHistoryUpdateWithoutOwnerInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumStateHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: DrumStateHistoryUpdateWithoutOwnerInput;
}
