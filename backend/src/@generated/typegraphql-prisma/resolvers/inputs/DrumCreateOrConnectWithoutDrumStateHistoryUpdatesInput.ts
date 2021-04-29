import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateWithoutDrumStateHistoryUpdatesInput } from "../inputs/DrumCreateWithoutDrumStateHistoryUpdatesInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: false
  })
  where!: DrumWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumStateHistoryUpdatesInput, {
    nullable: false
  })
  create!: DrumCreateWithoutDrumStateHistoryUpdatesInput;
}
