import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutCompaniesInput } from "../inputs/LocationCreateWithoutCompaniesInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationCreateOrConnectWithoutCompaniesInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutCompaniesInput, {
    nullable: false
  })
  create!: LocationCreateWithoutCompaniesInput;
}
