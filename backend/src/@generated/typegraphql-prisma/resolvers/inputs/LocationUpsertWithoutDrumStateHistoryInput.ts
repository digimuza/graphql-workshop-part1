import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutDrumStateHistoryInput } from "../inputs/LocationCreateWithoutDrumStateHistoryInput";
import { LocationUpdateWithoutDrumStateHistoryInput } from "../inputs/LocationUpdateWithoutDrumStateHistoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationUpsertWithoutDrumStateHistoryInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutDrumStateHistoryInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutDrumStateHistoryInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutDrumStateHistoryInput, {
    nullable: false
  })
  create!: LocationCreateWithoutDrumStateHistoryInput;
}
