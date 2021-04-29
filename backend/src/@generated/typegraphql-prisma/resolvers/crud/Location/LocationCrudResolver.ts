import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLocationArgs } from "./args/AggregateLocationArgs";
import { CreateLocationArgs } from "./args/CreateLocationArgs";
import { DeleteLocationArgs } from "./args/DeleteLocationArgs";
import { DeleteManyLocationArgs } from "./args/DeleteManyLocationArgs";
import { FindFirstLocationArgs } from "./args/FindFirstLocationArgs";
import { FindManyLocationArgs } from "./args/FindManyLocationArgs";
import { FindUniqueLocationArgs } from "./args/FindUniqueLocationArgs";
import { GroupByLocationArgs } from "./args/GroupByLocationArgs";
import { UpdateLocationArgs } from "./args/UpdateLocationArgs";
import { UpdateManyLocationArgs } from "./args/UpdateManyLocationArgs";
import { UpsertLocationArgs } from "./args/UpsertLocationArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Location } from "../../../models/Location";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLocation } from "../../outputs/AggregateLocation";
import { LocationGroupBy } from "../../outputs/LocationGroupBy";

@TypeGraphQL.Resolver(_of => Location)
export class LocationCrudResolver {
  @TypeGraphQL.Query(_returns => Location, {
    nullable: true
  })
  async location(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLocationArgs): Promise<Location | null> {
    return getPrismaFromContext(ctx).location.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Location, {
    nullable: true
  })
  async findFirstLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLocationArgs): Promise<Location | null> {
    return getPrismaFromContext(ctx).location.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Location], {
    nullable: false
  })
  async locations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLocationArgs): Promise<Location[]> {
    return getPrismaFromContext(ctx).location.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Location, {
    nullable: false
  })
  async createLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLocationArgs): Promise<Location> {
    return getPrismaFromContext(ctx).location.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Location, {
    nullable: true
  })
  async deleteLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLocationArgs): Promise<Location | null> {
    return getPrismaFromContext(ctx).location.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Location, {
    nullable: true
  })
  async updateLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLocationArgs): Promise<Location | null> {
    return getPrismaFromContext(ctx).location.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLocationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).location.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLocationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).location.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Location, {
    nullable: false
  })
  async upsertLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLocationArgs): Promise<Location> {
    return getPrismaFromContext(ctx).location.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateLocation, {
    nullable: false
  })
  async aggregateLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationArgs): Promise<AggregateLocation> {
    return getPrismaFromContext(ctx).location.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationGroupBy], {
    nullable: false
  })
  async groupByLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationArgs): Promise<LocationGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).location.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
