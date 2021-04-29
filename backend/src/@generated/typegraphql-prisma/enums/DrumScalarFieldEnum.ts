import * as TypeGraphQL from "type-graphql";

export enum DrumScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId",
  drumTypeId = "drumTypeId"
}
TypeGraphQL.registerEnumType(DrumScalarFieldEnum, {
  name: "DrumScalarFieldEnum",
  description: undefined,
});
