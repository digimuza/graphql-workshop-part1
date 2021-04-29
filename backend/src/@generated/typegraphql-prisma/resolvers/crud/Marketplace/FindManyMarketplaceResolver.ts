import * as TypeGraphQL from "type-graphql";
import { FindManyMarketplaceArgs } from "./args/FindManyMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class FindManyMarketplaceResolver {
  @TypeGraphQL.Query(_returns => [Marketplace], {
    nullable: false
  })
  async marketplaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMarketplaceArgs): Promise<Marketplace[]> {
    return getPrismaFromContext(ctx).marketplace.findMany(args);
  }
}
