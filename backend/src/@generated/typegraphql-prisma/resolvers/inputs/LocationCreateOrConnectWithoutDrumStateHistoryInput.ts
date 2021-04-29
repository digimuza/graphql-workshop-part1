import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutDrumStateHistoryInput } from "../inputs/LocationCreateWithoutDrumStateHistoryInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationCreateOrConnectWithoutDrumStateHistoryInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutDrumStateHistoryInput, {
    nullable: false
  })
  create!: LocationCreateWithoutDrumStateHistoryInput;
}
