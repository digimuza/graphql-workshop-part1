import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceUpdateWithoutCompanyInput } from "../inputs/MarketplaceUpdateWithoutCompanyInput";
import { MarketplaceWhereUniqueInput } from "../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => MarketplaceWhereUniqueInput, {
    nullable: false
  })
  where!: MarketplaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => MarketplaceUpdateWithoutCompanyInput, {
    nullable: false
  })
  data!: MarketplaceUpdateWithoutCompanyInput;
}
