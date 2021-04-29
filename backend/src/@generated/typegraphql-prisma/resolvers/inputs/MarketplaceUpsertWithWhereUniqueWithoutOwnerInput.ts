import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceCreateWithoutOwnerInput } from "../inputs/MarketplaceCreateWithoutOwnerInput";
import { MarketplaceUpdateWithoutOwnerInput } from "../inputs/MarketplaceUpdateWithoutOwnerInput";
import { MarketplaceWhereUniqueInput } from "../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => MarketplaceWhereUniqueInput, {
    nullable: false
  })
  where!: MarketplaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MarketplaceUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: MarketplaceUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => MarketplaceCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: MarketplaceCreateWithoutOwnerInput;
}
