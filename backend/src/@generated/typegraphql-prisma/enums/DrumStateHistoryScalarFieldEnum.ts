import * as TypeGraphQL from "type-graphql";

export enum DrumStateHistoryScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId",
  drumId = "drumId",
  state = "state",
  locationId = "locationId"
}
TypeGraphQL.registerEnumType(DrumStateHistoryScalarFieldEnum, {
  name: "DrumStateHistoryScalarFieldEnum",
  description: undefined,
});
