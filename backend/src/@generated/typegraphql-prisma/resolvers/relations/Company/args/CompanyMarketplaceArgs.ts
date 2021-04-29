import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MarketplaceOrderByInput } from "../../../inputs/MarketplaceOrderByInput";
import { MarketplaceWhereInput } from "../../../inputs/MarketplaceWhereInput";
import { MarketplaceWhereUniqueInput } from "../../../inputs/MarketplaceWhereUniqueInput";
import { MarketplaceScalarFieldEnum } from "../../../../enums/MarketplaceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CompanyMarketplaceArgs {
  @TypeGraphQL.Field(_type => MarketplaceWhereInput, {
    nullable: true
  })
  where?: MarketplaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceOrderByInput], {
    nullable: true
  })
  orderBy?: MarketplaceOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MarketplaceWhereUniqueInput, {
    nullable: true
  })
  cursor?: MarketplaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "isCurrent" | "isLast" | "companyId" | "drumId" | "gracePeriodInDays" | "minimumRentPeriodInMonths" | "reservationPeriodInDays"> | undefined;
}
