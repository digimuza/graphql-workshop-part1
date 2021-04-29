import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeCreateOrConnectWithoutOwnerInput } from "../inputs/DrumTypeCreateOrConnectWithoutOwnerInput";
import { DrumTypeCreateWithoutOwnerInput } from "../inputs/DrumTypeCreateWithoutOwnerInput";
import { DrumTypeScalarWhereInput } from "../inputs/DrumTypeScalarWhereInput";
import { DrumTypeUpdateManyWithWhereWithoutOwnerInput } from "../inputs/DrumTypeUpdateManyWithWhereWithoutOwnerInput";
import { DrumTypeUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/DrumTypeUpdateWithWhereUniqueWithoutOwnerInput";
import { DrumTypeUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/DrumTypeUpsertWithWhereUniqueWithoutOwnerInput";
import { DrumTypeWhereUniqueInput } from "../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [DrumTypeCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: DrumTypeCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: DrumTypeCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: DrumTypeUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeWhereUniqueInput], {
    nullable: true
  })
  set?: DrumTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DrumTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeWhereUniqueInput], {
    nullable: true
  })
  delete?: DrumTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: DrumTypeUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: DrumTypeUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrumTypeScalarWhereInput[] | undefined;
}
