import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutMarketplaceInput } from "../inputs/CompanyCreateOrConnectWithoutMarketplaceInput";
import { CompanyCreateWithoutMarketplaceInput } from "../inputs/CompanyCreateWithoutMarketplaceInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyCreateNestedOneWithoutMarketplaceInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutMarketplaceInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutMarketplaceInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutMarketplaceInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutMarketplaceInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;
}
