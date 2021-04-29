import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarketplaceCreateInput } from "../../../inputs/MarketplaceCreateInput";
import { MarketplaceUpdateInput } from "../../../inputs/MarketplaceUpdateInput";
import { MarketplaceWhereUniqueInput } from "../../../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMarketplaceArgs {
  @TypeGraphQL.Field(_type => MarketplaceWhereUniqueInput, {
    nullable: false
  })
  where!: MarketplaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MarketplaceCreateInput, {
    nullable: false
  })
  create!: MarketplaceCreateInput;

  @TypeGraphQL.Field(_type => MarketplaceUpdateInput, {
    nullable: false
  })
  update!: MarketplaceUpdateInput;
}
