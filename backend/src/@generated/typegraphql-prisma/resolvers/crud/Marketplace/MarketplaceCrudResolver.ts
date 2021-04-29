import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMarketplaceArgs } from "./args/AggregateMarketplaceArgs";
import { CreateMarketplaceArgs } from "./args/CreateMarketplaceArgs";
import { DeleteManyMarketplaceArgs } from "./args/DeleteManyMarketplaceArgs";
import { DeleteMarketplaceArgs } from "./args/DeleteMarketplaceArgs";
import { FindFirstMarketplaceArgs } from "./args/FindFirstMarketplaceArgs";
import { FindManyMarketplaceArgs } from "./args/FindManyMarketplaceArgs";
import { FindUniqueMarketplaceArgs } from "./args/FindUniqueMarketplaceArgs";
import { GroupByMarketplaceArgs } from "./args/GroupByMarketplaceArgs";
import { UpdateManyMarketplaceArgs } from "./args/UpdateManyMarketplaceArgs";
import { UpdateMarketplaceArgs } from "./args/UpdateMarketplaceArgs";
import { UpsertMarketplaceArgs } from "./args/UpsertMarketplaceArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Marketplace } from "../../../models/Marketplace";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMarketplace } from "../../outputs/AggregateMarketplace";
import { MarketplaceGroupBy } from "../../outputs/MarketplaceGroupBy";

@TypeGraphQL.Resolver(_of => Marketplace)
export class MarketplaceCrudResolver {
  @TypeGraphQL.Query(_returns => Marketplace, {
    nullable: true
  })
  async marketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMarketplaceArgs): Promise<Marketplace | null> {
    return getPrismaFromContext(ctx).marketplace.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Marketplace, {
    nullable: true
  })
  async findFirstMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMarketplaceArgs): Promise<Marketplace | null> {
    return getPrismaFromContext(ctx).marketplace.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Marketplace], {
    nullable: false
  })
  async marketplaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMarketplaceArgs): Promise<Marketplace[]> {
    return getPrismaFromContext(ctx).marketplace.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Marketplace, {
    nullable: false
  })
  async createMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMarketplaceArgs): Promise<Marketplace> {
    return getPrismaFromContext(ctx).marketplace.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Marketplace, {
    nullable: true
  })
  async deleteMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMarketplaceArgs): Promise<Marketplace | null> {
    return getPrismaFromContext(ctx).marketplace.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Marketplace, {
    nullable: true
  })
  async updateMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMarketplaceArgs): Promise<Marketplace | null> {
    return getPrismaFromContext(ctx).marketplace.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMarketplaceArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).marketplace.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMarketplaceArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).marketplace.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Marketplace, {
    nullable: false
  })
  async upsertMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMarketplaceArgs): Promise<Marketplace> {
    return getPrismaFromContext(ctx).marketplace.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateMarketplace, {
    nullable: false
  })
  async aggregateMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMarketplaceArgs): Promise<AggregateMarketplace> {
    return getPrismaFromContext(ctx).marketplace.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
