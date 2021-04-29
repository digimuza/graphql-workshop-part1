import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeCreateWithoutDrumInput } from "../inputs/DrumTypeCreateWithoutDrumInput";
import { DrumTypeUpdateWithoutDrumInput } from "../inputs/DrumTypeUpdateWithoutDrumInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeUpsertWithoutDrumInput {
  @TypeGraphQL.Field(_type => DrumTypeUpdateWithoutDrumInput, {
    nullable: false
  })
  update!: DrumTypeUpdateWithoutDrumInput;

  @TypeGraphQL.Field(_type => DrumTypeCreateWithoutDrumInput, {
    nullable: false
  })
  create!: DrumTypeCreateWithoutDrumInput;
}
