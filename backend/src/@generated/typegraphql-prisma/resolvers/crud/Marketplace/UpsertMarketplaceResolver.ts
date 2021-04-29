import * as TypeGraphQL from "type-graphql";
import { UpsertMarketplaceArgs } from "./args/UpsertMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class UpsertMarketplaceResolver {
  @TypeGraphQL.Mutation(_returns => Marketplace, {
    nullable: false
  })
  async upsertMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMarketplaceArgs): Promise<Marketplace> {
    return getPrismaFromContext(ctx).marketplace.upsert(args);
  }
}
