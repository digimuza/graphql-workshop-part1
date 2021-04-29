import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceCreateWithoutCompanyInput } from "../inputs/MarketplaceCreateWithoutCompanyInput";
import { MarketplaceUpdateWithoutCompanyInput } from "../inputs/MarketplaceUpdateWithoutCompanyInput";
import { MarketplaceWhereUniqueInput } from "../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => MarketplaceWhereUniqueInput, {
    nullable: false
  })
  where!: MarketplaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MarketplaceUpdateWithoutCompanyInput, {
    nullable: false
  })
  update!: MarketplaceUpdateWithoutCompanyInput;

  @TypeGraphQL.Field(_type => MarketplaceCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: MarketplaceCreateWithoutCompanyInput;
}
