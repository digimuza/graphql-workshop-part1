import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryCreateOrConnectWithoutOwnerInput } from "../inputs/DrumMovementHistoryCreateOrConnectWithoutOwnerInput";
import { DrumMovementHistoryCreateWithoutOwnerInput } from "../inputs/DrumMovementHistoryCreateWithoutOwnerInput";
import { DrumMovementHistoryScalarWhereInput } from "../inputs/DrumMovementHistoryScalarWhereInput";
import { DrumMovementHistoryUpdateManyWithWhereWithoutOwnerInput } from "../inputs/DrumMovementHistoryUpdateManyWithWhereWithoutOwnerInput";
import { DrumMovementHistoryUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/DrumMovementHistoryUpdateWithWhereUniqueWithoutOwnerInput";
import { DrumMovementHistoryUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/DrumMovementHistoryUpsertWithWhereUniqueWithoutOwnerInput";
import { DrumMovementHistoryWhereUniqueInput } from "../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [DrumMovementHistoryCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: DrumMovementHistoryCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: DrumMovementHistoryCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: DrumMovementHistoryUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [DrumMovementHistoryUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: DrumMovementHistoryUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: DrumMovementHistoryUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrumMovementHistoryScalarWhereInput[] | undefined;
}
