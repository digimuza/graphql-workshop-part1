import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceScalarWhereInput } from "../inputs/MarketplaceScalarWhereInput";
import { MarketplaceUpdateManyMutationInput } from "../inputs/MarketplaceUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceUpdateManyWithWhereWithoutCompanyInput {
  @TypeGraphQL.Field(_type => MarketplaceScalarWhereInput, {
    nullable: false
  })
  where!: MarketplaceScalarWhereInput;

  @TypeGraphQL.Field(_type => MarketplaceUpdateManyMutationInput, {
    nullable: false
  })
  data!: MarketplaceUpdateManyMutationInput;
}
