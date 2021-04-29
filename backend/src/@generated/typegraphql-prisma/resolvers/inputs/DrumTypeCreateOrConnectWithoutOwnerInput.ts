import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeCreateWithoutOwnerInput } from "../inputs/DrumTypeCreateWithoutOwnerInput";
import { DrumTypeWhereUniqueInput } from "../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DrumTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumTypeCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: DrumTypeCreateWithoutOwnerInput;
}
