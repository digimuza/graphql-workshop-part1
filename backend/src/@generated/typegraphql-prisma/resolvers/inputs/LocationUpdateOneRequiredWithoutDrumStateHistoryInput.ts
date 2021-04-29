import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutDrumStateHistoryInput } from "../inputs/LocationCreateOrConnectWithoutDrumStateHistoryInput";
import { LocationCreateWithoutDrumStateHistoryInput } from "../inputs/LocationCreateWithoutDrumStateHistoryInput";
import { LocationUpdateWithoutDrumStateHistoryInput } from "../inputs/LocationUpdateWithoutDrumStateHistoryInput";
import { LocationUpsertWithoutDrumStateHistoryInput } from "../inputs/LocationUpsertWithoutDrumStateHistoryInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationUpdateOneRequiredWithoutDrumStateHistoryInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutDrumStateHistoryInput, {
    nullable: true
  })
  create?: LocationCreateWithoutDrumStateHistoryInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutDrumStateHistoryInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutDrumStateHistoryInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutDrumStateHistoryInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutDrumStateHistoryInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutDrumStateHistoryInput, {
    nullable: true
  })
  update?: LocationUpdateWithoutDrumStateHistoryInput | undefined;
}
