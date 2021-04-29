import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateOrConnectWithoutLocationInput } from "../inputs/DrumStateHistoryCreateOrConnectWithoutLocationInput";
import { DrumStateHistoryCreateWithoutLocationInput } from "../inputs/DrumStateHistoryCreateWithoutLocationInput";
import { DrumStateHistoryScalarWhereInput } from "../inputs/DrumStateHistoryScalarWhereInput";
import { DrumStateHistoryUpdateManyWithWhereWithoutLocationInput } from "../inputs/DrumStateHistoryUpdateManyWithWhereWithoutLocationInput";
import { DrumStateHistoryUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/DrumStateHistoryUpdateWithWhereUniqueWithoutLocationInput";
import { DrumStateHistoryUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/DrumStateHistoryUpsertWithWhereUniqueWithoutLocationInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpdateManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateWithoutLocationInput], {
    nullable: true
  })
  create?: DrumStateHistoryCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: DrumStateHistoryCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: DrumStateHistoryUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: DrumStateHistoryUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: DrumStateHistoryUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrumStateHistoryScalarWhereInput[] | undefined;
}
