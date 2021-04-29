import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarketplaceCreateInput } from "../../../inputs/MarketplaceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMarketplaceArgs {
  @TypeGraphQL.Field(_type => MarketplaceCreateInput, {
    nullable: false
  })
  data!: MarketplaceCreateInput;
}
