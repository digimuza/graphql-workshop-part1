import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateWithoutDrumTypeInput } from "../inputs/DrumCreateWithoutDrumTypeInput";
import { DrumUpdateWithoutDrumTypeInput } from "../inputs/DrumUpdateWithoutDrumTypeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumUpsertWithoutDrumTypeInput {
  @TypeGraphQL.Field(_type => DrumUpdateWithoutDrumTypeInput, {
    nullable: false
  })
  update!: DrumUpdateWithoutDrumTypeInput;

  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumTypeInput, {
    nullable: false
  })
  create!: DrumCreateWithoutDrumTypeInput;
}
