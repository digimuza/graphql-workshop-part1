import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeCreateWithoutOwnerInput } from "../inputs/DrumTypeCreateWithoutOwnerInput";
import { DrumTypeUpdateWithoutOwnerInput } from "../inputs/DrumTypeUpdateWithoutOwnerInput";
import { DrumTypeWhereUniqueInput } from "../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DrumTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumTypeUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: DrumTypeUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => DrumTypeCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: DrumTypeCreateWithoutOwnerInput;
}
