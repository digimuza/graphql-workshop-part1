import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByMarketplaceArgs } from "./args/GroupByMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { MarketplaceGroupBy } from "../../outputs/MarketplaceGroupBy";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class GroupByMarketplaceResolver {
  @TypeGraphQL.Query(_returns => [MarketplaceGroupBy], {
    nullable: false
  })
  async groupByMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMarketplaceArgs): Promise<MarketplaceGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).marketplace.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
