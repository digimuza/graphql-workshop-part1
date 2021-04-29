import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeCreateWithoutDrumInput } from "../inputs/DrumTypeCreateWithoutDrumInput";
import { DrumTypeWhereUniqueInput } from "../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeCreateOrConnectWithoutDrumInput {
  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DrumTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumTypeCreateWithoutDrumInput, {
    nullable: false
  })
  create!: DrumTypeCreateWithoutDrumInput;
}
