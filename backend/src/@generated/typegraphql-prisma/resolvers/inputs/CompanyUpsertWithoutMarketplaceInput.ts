import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutMarketplaceInput } from "../inputs/CompanyCreateWithoutMarketplaceInput";
import { CompanyUpdateWithoutMarketplaceInput } from "../inputs/CompanyUpdateWithoutMarketplaceInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUpsertWithoutMarketplaceInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutMarketplaceInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutMarketplaceInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutMarketplaceInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutMarketplaceInput;
}
