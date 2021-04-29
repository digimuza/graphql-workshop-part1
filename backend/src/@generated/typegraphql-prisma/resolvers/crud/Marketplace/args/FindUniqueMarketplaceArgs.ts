import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarketplaceWhereUniqueInput } from "../../../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMarketplaceArgs {
  @TypeGraphQL.Field(_type => MarketplaceWhereUniqueInput, {
    nullable: false
  })
  where!: MarketplaceWhereUniqueInput;
}
