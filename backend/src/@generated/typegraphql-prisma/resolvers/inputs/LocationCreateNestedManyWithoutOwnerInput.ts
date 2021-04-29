import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutOwnerInput } from "../inputs/LocationCreateOrConnectWithoutOwnerInput";
import { LocationCreateWithoutOwnerInput } from "../inputs/LocationCreateWithoutOwnerInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [LocationCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: LocationCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationWhereUniqueInput[] | undefined;
}
