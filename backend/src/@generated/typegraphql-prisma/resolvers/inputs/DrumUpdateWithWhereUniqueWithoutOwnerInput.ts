import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumUpdateWithoutOwnerInput } from "../inputs/DrumUpdateWithoutOwnerInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: false
  })
  where!: DrumWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: DrumUpdateWithoutOwnerInput;
}
