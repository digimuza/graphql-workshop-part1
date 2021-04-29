import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateWithoutDrumInput } from "../inputs/DrumStateHistoryCreateWithoutDrumInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryCreateOrConnectWithoutDrumInput {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumStateHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumStateHistoryCreateWithoutDrumInput, {
    nullable: false
  })
  create!: DrumStateHistoryCreateWithoutDrumInput;
}
