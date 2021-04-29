import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceCreateOrConnectWithoutCompanyInput } from "../inputs/MarketplaceCreateOrConnectWithoutCompanyInput";
import { MarketplaceCreateWithoutCompanyInput } from "../inputs/MarketplaceCreateWithoutCompanyInput";
import { MarketplaceWhereUniqueInput } from "../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceCreateNestedManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [MarketplaceCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: MarketplaceCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: MarketplaceCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceWhereUniqueInput], {
    nullable: true
  })
  connect?: MarketplaceWhereUniqueInput[] | undefined;
}
