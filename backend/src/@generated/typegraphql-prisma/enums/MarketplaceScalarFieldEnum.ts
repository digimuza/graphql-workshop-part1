import * as TypeGraphQL from "type-graphql";

export enum MarketplaceScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId",
  isCurrent = "isCurrent",
  isLast = "isLast",
  companyId = "companyId",
  drumId = "drumId",
  gracePeriodInDays = "gracePeriodInDays",
  minimumRentPeriodInMonths = "minimumRentPeriodInMonths",
  reservationPeriodInDays = "reservationPeriodInDays"
}
TypeGraphQL.registerEnumType(MarketplaceScalarFieldEnum, {
  name: "MarketplaceScalarFieldEnum",
  description: undefined,
});
