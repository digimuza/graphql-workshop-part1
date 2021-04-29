import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarketplaceUpdateInput } from "../../../inputs/MarketplaceUpdateInput";
import { MarketplaceWhereUniqueInput } from "../../../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMarketplaceArgs {
  @TypeGraphQL.Field(_type => MarketplaceUpdateInput, {
    nullable: false
  })
  data!: MarketplaceUpdateInput;

  @TypeGraphQL.Field(_type => MarketplaceWhereUniqueInput, {
    nullable: false
  })
  where!: MarketplaceWhereUniqueInput;
}
