import * as TypeGraphQL from "type-graphql";

export enum DrumTypeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId",
  coreDiameter = "coreDiameter",
  coreWidth = "coreWidth",
  drivingBoreDiameter = "drivingBoreDiameter",
  drivingBoreOffset = "drivingBoreOffset",
  emptyWeight = "emptyWeight",
  flangeDiameter = "flangeDiameter",
  material = "material",
  maximumLoadWeight = "maximumLoadWeight",
  name = "name",
  overallWidth = "overallWidth",
  drumId = "drumId"
}
TypeGraphQL.registerEnumType(DrumTypeScalarFieldEnum, {
  name: "DrumTypeScalarFieldEnum",
  description: undefined,
});
