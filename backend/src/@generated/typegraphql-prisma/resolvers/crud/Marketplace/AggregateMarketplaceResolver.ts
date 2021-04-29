import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMarketplaceArgs } from "./args/AggregateMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { AggregateMarketplace } from "../../outputs/AggregateMarketplace";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class AggregateMarketplaceResolver {
  @TypeGraphQL.Query(_returns => AggregateMarketplace, {
    nullable: false
  })
  async aggregateMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMarketplaceArgs): Promise<AggregateMarketplace> {
    return getPrismaFromContext(ctx).marketplace.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
