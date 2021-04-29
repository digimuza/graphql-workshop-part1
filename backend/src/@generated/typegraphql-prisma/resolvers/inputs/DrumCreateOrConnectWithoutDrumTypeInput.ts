import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateWithoutDrumTypeInput } from "../inputs/DrumCreateWithoutDrumTypeInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateOrConnectWithoutDrumTypeInput {
  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: false
  })
  where!: DrumWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumTypeInput, {
    nullable: false
  })
  create!: DrumCreateWithoutDrumTypeInput;
}
