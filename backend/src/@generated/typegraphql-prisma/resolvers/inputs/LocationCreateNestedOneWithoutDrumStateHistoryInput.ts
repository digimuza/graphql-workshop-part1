import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutDrumStateHistoryInput } from "../inputs/LocationCreateOrConnectWithoutDrumStateHistoryInput";
import { LocationCreateWithoutDrumStateHistoryInput } from "../inputs/LocationCreateWithoutDrumStateHistoryInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationCreateNestedOneWithoutDrumStateHistoryInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutDrumStateHistoryInput, {
    nullable: true
  })
  create?: LocationCreateWithoutDrumStateHistoryInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutDrumStateHistoryInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutDrumStateHistoryInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
