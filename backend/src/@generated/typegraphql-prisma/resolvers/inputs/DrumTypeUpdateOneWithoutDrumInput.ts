import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeCreateOrConnectWithoutDrumInput } from "../inputs/DrumTypeCreateOrConnectWithoutDrumInput";
import { DrumTypeCreateWithoutDrumInput } from "../inputs/DrumTypeCreateWithoutDrumInput";
import { DrumTypeUpdateWithoutDrumInput } from "../inputs/DrumTypeUpdateWithoutDrumInput";
import { DrumTypeUpsertWithoutDrumInput } from "../inputs/DrumTypeUpsertWithoutDrumInput";
import { DrumTypeWhereUniqueInput } from "../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeUpdateOneWithoutDrumInput {
  @TypeGraphQL.Field(_type => DrumTypeCreateWithoutDrumInput, {
    nullable: true
  })
  create?: DrumTypeCreateWithoutDrumInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeCreateOrConnectWithoutDrumInput, {
    nullable: true
  })
  connectOrCreate?: DrumTypeCreateOrConnectWithoutDrumInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeUpsertWithoutDrumInput, {
    nullable: true
  })
  upsert?: DrumTypeUpsertWithoutDrumInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: DrumTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DrumTypeUpdateWithoutDrumInput, {
    nullable: true
  })
  update?: DrumTypeUpdateWithoutDrumInput | undefined;
}
