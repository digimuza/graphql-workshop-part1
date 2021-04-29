import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutOwnerInput } from "../inputs/LocationUpdateWithoutOwnerInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutOwnerInput;
}
