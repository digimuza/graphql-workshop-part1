import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeUpdateWithoutOwnerInput } from "../inputs/DrumTypeUpdateWithoutOwnerInput";
import { DrumTypeWhereUniqueInput } from "../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DrumTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumTypeUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: DrumTypeUpdateWithoutOwnerInput;
}
