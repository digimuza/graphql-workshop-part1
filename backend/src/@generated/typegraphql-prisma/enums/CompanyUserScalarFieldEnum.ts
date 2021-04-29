import * as TypeGraphQL from "type-graphql";

export enum CompanyUserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  ownerId = "ownerId"
}
TypeGraphQL.registerEnumType(CompanyUserScalarFieldEnum, {
  name: "CompanyUserScalarFieldEnum",
  description: undefined,
});
