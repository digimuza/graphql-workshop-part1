import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceWhereInput } from "../inputs/MarketplaceWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceListRelationFilter {
  @TypeGraphQL.Field(_type => MarketplaceWhereInput, {
    nullable: true
  })
  every?: MarketplaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => MarketplaceWhereInput, {
    nullable: true
  })
  some?: MarketplaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => MarketplaceWhereInput, {
    nullable: true
  })
  none?: MarketplaceWhereInput | undefined;
}
