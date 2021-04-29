import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateOrConnectWithoutOwnerInput } from "../inputs/DrumStateHistoryCreateOrConnectWithoutOwnerInput";
import { DrumStateHistoryCreateWithoutOwnerInput } from "../inputs/DrumStateHistoryCreateWithoutOwnerInput";
import { DrumStateHistoryScalarWhereInput } from "../inputs/DrumStateHistoryScalarWhereInput";
import { DrumStateHistoryUpdateManyWithWhereWithoutOwnerInput } from "../inputs/DrumStateHistoryUpdateManyWithWhereWithoutOwnerInput";
import { DrumStateHistoryUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/DrumStateHistoryUpdateWithWhereUniqueWithoutOwnerInput";
import { DrumStateHistoryUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/DrumStateHistoryUpsertWithWhereUniqueWithoutOwnerInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: DrumStateHistoryCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: DrumStateHistoryCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: DrumStateHistoryUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: DrumStateHistoryUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: DrumStateHistoryUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrumStateHistoryScalarWhereInput[] | undefined;
}
