import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateOrConnectWithoutDrumTypeInput } from "../inputs/DrumCreateOrConnectWithoutDrumTypeInput";
import { DrumCreateWithoutDrumTypeInput } from "../inputs/DrumCreateWithoutDrumTypeInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateNestedOneWithoutDrumTypeInput {
  @TypeGraphQL.Field(_type => DrumCreateWithoutDrumTypeInput, {
    nullable: true
  })
  create?: DrumCreateWithoutDrumTypeInput | undefined;

  @TypeGraphQL.Field(_type => DrumCreateOrConnectWithoutDrumTypeInput, {
    nullable: true
  })
  connectOrCreate?: DrumCreateOrConnectWithoutDrumTypeInput | undefined;

  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: true
  })
  connect?: DrumWhereUniqueInput | undefined;
}
