import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarketplaceOrderByInput } from "../../../inputs/MarketplaceOrderByInput";
import { MarketplaceScalarWhereWithAggregatesInput } from "../../../inputs/MarketplaceScalarWhereWithAggregatesInput";
import { MarketplaceWhereInput } from "../../../inputs/MarketplaceWhereInput";
import { MarketplaceScalarFieldEnum } from "../../../../enums/MarketplaceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMarketplaceArgs {
  @TypeGraphQL.Field(_type => MarketplaceWhereInput, {
    nullable: true
  })
  where?: MarketplaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceOrderByInput], {
    nullable: true
  })
  orderBy?: MarketplaceOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "isCurrent" | "isLast" | "companyId" | "drumId" | "gracePeriodInDays" | "minimumRentPeriodInMonths" | "reservationPeriodInDays">;

  @TypeGraphQL.Field(_type => MarketplaceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MarketplaceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
