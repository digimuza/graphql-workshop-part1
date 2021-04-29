import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceUpdateWithoutOwnerInput } from "../inputs/MarketplaceUpdateWithoutOwnerInput";
import { MarketplaceWhereUniqueInput } from "../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => MarketplaceWhereUniqueInput, {
    nullable: false
  })
  where!: MarketplaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MarketplaceUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: MarketplaceUpdateWithoutOwnerInput;
}
