import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateOrConnectWithoutDrumInput } from "../inputs/DrumStateHistoryCreateOrConnectWithoutDrumInput";
import { DrumStateHistoryCreateWithoutDrumInput } from "../inputs/DrumStateHistoryCreateWithoutDrumInput";
import { DrumStateHistoryScalarWhereInput } from "../inputs/DrumStateHistoryScalarWhereInput";
import { DrumStateHistoryUpdateManyWithWhereWithoutDrumInput } from "../inputs/DrumStateHistoryUpdateManyWithWhereWithoutDrumInput";
import { DrumStateHistoryUpdateWithWhereUniqueWithoutDrumInput } from "../inputs/DrumStateHistoryUpdateWithWhereUniqueWithoutDrumInput";
import { DrumStateHistoryUpsertWithWhereUniqueWithoutDrumInput } from "../inputs/DrumStateHistoryUpsertWithWhereUniqueWithoutDrumInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpdateManyWithoutDrumInput {
  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateWithoutDrumInput], {
    nullable: true
  })
  create?: DrumStateHistoryCreateWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateOrConnectWithoutDrumInput], {
    nullable: true
  })
  connectOrCreate?: DrumStateHistoryCreateOrConnectWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpsertWithWhereUniqueWithoutDrumInput], {
    nullable: true
  })
  upsert?: DrumStateHistoryUpsertWithWhereUniqueWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumStateHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereUniqueInput], {
    nullable: true
  })
  set?: DrumStateHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DrumStateHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereUniqueInput], {
    nullable: true
  })
  delete?: DrumStateHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpdateWithWhereUniqueWithoutDrumInput], {
    nullable: true
  })
  update?: DrumStateHistoryUpdateWithWhereUniqueWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpdateManyWithWhereWithoutDrumInput], {
    nullable: true
  })
  updateMany?: DrumStateHistoryUpdateManyWithWhereWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrumStateHistoryScalarWhereInput[] | undefined;
}
