import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceCreateOrConnectWithoutOwnerInput } from "../inputs/MarketplaceCreateOrConnectWithoutOwnerInput";
import { MarketplaceCreateWithoutOwnerInput } from "../inputs/MarketplaceCreateWithoutOwnerInput";
import { MarketplaceWhereUniqueInput } from "../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [MarketplaceCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: MarketplaceCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: MarketplaceCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceWhereUniqueInput], {
    nullable: true
  })
  connect?: MarketplaceWhereUniqueInput[] | undefined;
}
