import * as TypeGraphQL from "type-graphql";
import { FindUniqueMarketplaceArgs } from "./args/FindUniqueMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class FindUniqueMarketplaceResolver {
  @TypeGraphQL.Query(_returns => Marketplace, {
    nullable: true
  })
  async marketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMarketplaceArgs): Promise<Marketplace | null> {
    return getPrismaFromContext(ctx).marketplace.findUnique(args);
  }
}
