import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateWithoutOwnerInput } from "../inputs/DrumCreateWithoutOwnerInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: false
  })
  where!: DrumWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: DrumCreateWithoutOwnerInput;
}
