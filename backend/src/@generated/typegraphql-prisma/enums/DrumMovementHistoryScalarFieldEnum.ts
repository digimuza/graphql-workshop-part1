import * as TypeGraphQL from "type-graphql";

export enum DrumMovementHistoryScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId",
  drumId = "drumId",
  latitude = "latitude",
  longitude = "longitude"
}
TypeGraphQL.registerEnumType(DrumMovementHistoryScalarFieldEnum, {
  name: "DrumMovementHistoryScalarFieldEnum",
  description: undefined,
});
