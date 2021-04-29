import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryCreateOrConnectWithoutDrumInput } from "../inputs/DrumMovementHistoryCreateOrConnectWithoutDrumInput";
import { DrumMovementHistoryCreateWithoutDrumInput } from "../inputs/DrumMovementHistoryCreateWithoutDrumInput";
import { DrumMovementHistoryScalarWhereInput } from "../inputs/DrumMovementHistoryScalarWhereInput";
import { DrumMovementHistoryUpdateManyWithWhereWithoutDrumInput } from "../inputs/DrumMovementHistoryUpdateManyWithWhereWithoutDrumInput";
import { DrumMovementHistoryUpdateWithWhereUniqueWithoutDrumInput } from "../inputs/DrumMovementHistoryUpdateWithWhereUniqueWithoutDrumInput";
import { DrumMovementHistoryUpsertWithWhereUniqueWithoutDrumInput } from "../inputs/DrumMovementHistoryUpsertWithWhereUniqueWithoutDrumInput";
import { DrumMovementHistoryWhereUniqueInput } from "../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryUpdateManyWithoutDrumInput {
  @TypeGraphQL.Field(_type => [DrumMovementHistoryCreateWithoutDrumInput], {
    nullable: true
  })
  create?: DrumMovementHistoryCreateWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryCreateOrConnectWithoutDrumInput], {
    nullable: true
  })
  connectOrCreate?: DrumMovementHistoryCreateOrConnectWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryUpsertWithWhereUniqueWithoutDrumInput], {
    nullable: true
  })
  upsert?: DrumMovementHistoryUpsertWithWhereUniqueWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumMovementHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereUniqueInput], {
    nullable: true
  })
  set?: DrumMovementHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DrumMovementHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereUniqueInput], {
    nullable: true
  })
  delete?: DrumMovementHistoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryUpdateWithWhereUniqueWithoutDrumInput], {
    nullable: true
  })
  update?: DrumMovementHistoryUpdateWithWhereUniqueWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryUpdateManyWithWhereWithoutDrumInput], {
    nullable: true
  })
  updateMany?: DrumMovementHistoryUpdateManyWithWhereWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrumMovementHistoryScalarWhereInput[] | undefined;
}
