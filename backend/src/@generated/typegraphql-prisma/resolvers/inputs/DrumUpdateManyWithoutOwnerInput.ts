import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateOrConnectWithoutOwnerInput } from "../inputs/DrumCreateOrConnectWithoutOwnerInput";
import { DrumCreateWithoutOwnerInput } from "../inputs/DrumCreateWithoutOwnerInput";
import { DrumScalarWhereInput } from "../inputs/DrumScalarWhereInput";
import { DrumUpdateManyWithWhereWithoutOwnerInput } from "../inputs/DrumUpdateManyWithWhereWithoutOwnerInput";
import { DrumUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/DrumUpdateWithWhereUniqueWithoutOwnerInput";
import { DrumUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/DrumUpsertWithWhereUniqueWithoutOwnerInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [DrumCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: DrumCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: DrumCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: DrumUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumWhereUniqueInput], {
    nullable: true
  })
  set?: DrumWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DrumWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumWhereUniqueInput], {
    nullable: true
  })
  delete?: DrumWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: DrumUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: DrumUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DrumScalarWhereInput[] | undefined;
}
