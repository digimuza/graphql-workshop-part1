import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutCompaniesInput } from "../inputs/LocationCreateWithoutCompaniesInput";
import { LocationUpdateWithoutCompaniesInput } from "../inputs/LocationUpdateWithoutCompaniesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationUpsertWithoutCompaniesInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutCompaniesInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutCompaniesInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutCompaniesInput, {
    nullable: false
  })
  create!: LocationCreateWithoutCompaniesInput;
}
