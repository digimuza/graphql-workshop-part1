import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarketplaceWhereInput } from "../../../inputs/MarketplaceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMarketplaceArgs {
  @TypeGraphQL.Field(_type => MarketplaceWhereInput, {
    nullable: true
  })
  where?: MarketplaceWhereInput | undefined;
}
