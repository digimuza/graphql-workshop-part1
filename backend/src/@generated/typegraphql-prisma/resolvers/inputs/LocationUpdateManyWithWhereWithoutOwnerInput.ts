import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationScalarWhereInput } from "../inputs/LocationScalarWhereInput";
import { LocationUpdateManyMutationInput } from "../inputs/LocationUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => LocationScalarWhereInput, {
    nullable: false
  })
  where!: LocationScalarWhereInput;

  @TypeGraphQL.Field(_type => LocationUpdateManyMutationInput, {
    nullable: false
  })
  data!: LocationUpdateManyMutationInput;
}
