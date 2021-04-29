import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutOwnerInput } from "../inputs/LocationCreateOrConnectWithoutOwnerInput";
import { LocationCreateWithoutOwnerInput } from "../inputs/LocationCreateWithoutOwnerInput";
import { LocationScalarWhereInput } from "../inputs/LocationScalarWhereInput";
import { LocationUpdateManyWithWhereWithoutOwnerInput } from "../inputs/LocationUpdateManyWithWhereWithoutOwnerInput";
import { LocationUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/LocationUpdateWithWhereUniqueWithoutOwnerInput";
import { LocationUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/LocationUpsertWithWhereUniqueWithoutOwnerInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [LocationCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: LocationCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: LocationUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  set?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  delete?: LocationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: LocationUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: LocationUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LocationScalarWhereInput[] | undefined;
}
