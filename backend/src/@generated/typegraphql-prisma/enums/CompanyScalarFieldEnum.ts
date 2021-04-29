import * as TypeGraphQL from "type-graphql";

export enum CompanyScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId",
  name = "name",
  locationId = "locationId"
}
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
  name: "CompanyScalarFieldEnum",
  description: undefined,
});
