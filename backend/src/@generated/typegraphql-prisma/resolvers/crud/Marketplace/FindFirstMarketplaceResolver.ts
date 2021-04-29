import * as TypeGraphQL from "type-graphql";
import { FindFirstMarketplaceArgs } from "./args/FindFirstMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class FindFirstMarketplaceResolver {
  @TypeGraphQL.Query(_returns => Marketplace, {
    nullable: true
  })
  async findFirstMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMarketplaceArgs): Promise<Marketplace | null> {
    return getPrismaFromContext(ctx).marketplace.findFirst(args);
  }
}
