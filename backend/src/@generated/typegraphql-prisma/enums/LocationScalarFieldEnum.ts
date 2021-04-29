import * as TypeGraphQL from "type-graphql";

export enum LocationScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId",
  address = "address",
  latitude = "latitude",
  longitude = "longitude"
}
TypeGraphQL.registerEnumType(LocationScalarFieldEnum, {
  name: "LocationScalarFieldEnum",
  description: undefined,
});
