import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutCompaniesInput } from "../inputs/LocationCreateOrConnectWithoutCompaniesInput";
import { LocationCreateWithoutCompaniesInput } from "../inputs/LocationCreateWithoutCompaniesInput";
import { LocationUpdateWithoutCompaniesInput } from "../inputs/LocationUpdateWithoutCompaniesInput";
import { LocationUpsertWithoutCompaniesInput } from "../inputs/LocationUpsertWithoutCompaniesInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationUpdateOneWithoutCompaniesInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutCompaniesInput, {
    nullable: true
  })
  create?: LocationCreateWithoutCompaniesInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutCompaniesInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutCompaniesInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutCompaniesInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutCompaniesInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutCompaniesInput, {
    nullable: true
  })
  update?: LocationUpdateWithoutCompaniesInput | undefined;
}
