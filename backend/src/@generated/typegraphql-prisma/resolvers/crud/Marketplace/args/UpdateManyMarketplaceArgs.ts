import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarketplaceUpdateManyMutationInput } from "../../../inputs/MarketplaceUpdateManyMutationInput";
import { MarketplaceWhereInput } from "../../../inputs/MarketplaceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMarketplaceArgs {
  @TypeGraphQL.Field(_type => MarketplaceUpdateManyMutationInput, {
    nullable: false
  })
  data!: MarketplaceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MarketplaceWhereInput, {
    nullable: true
  })
  where?: MarketplaceWhereInput | undefined;
}
