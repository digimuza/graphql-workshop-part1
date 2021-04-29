import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutMarketplaceInput } from "../inputs/CompanyCreateOrConnectWithoutMarketplaceInput";
import { CompanyCreateWithoutMarketplaceInput } from "../inputs/CompanyCreateWithoutMarketplaceInput";
import { CompanyUpdateWithoutMarketplaceInput } from "../inputs/CompanyUpdateWithoutMarketplaceInput";
import { CompanyUpsertWithoutMarketplaceInput } from "../inputs/CompanyUpsertWithoutMarketplaceInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUpdateOneWithoutMarketplaceInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutMarketplaceInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutMarketplaceInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutMarketplaceInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutMarketplaceInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutMarketplaceInput, {
    nullable: true
  })
  upsert?: CompanyUpsertWithoutMarketplaceInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutMarketplaceInput, {
    nullable: true
  })
  update?: CompanyUpdateWithoutMarketplaceInput | undefined;
}
