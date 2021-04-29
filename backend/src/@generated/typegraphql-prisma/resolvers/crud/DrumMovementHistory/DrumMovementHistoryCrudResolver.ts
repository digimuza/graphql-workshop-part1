import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrumMovementHistoryArgs } from "./args/AggregateDrumMovementHistoryArgs";
import { CreateDrumMovementHistoryArgs } from "./args/CreateDrumMovementHistoryArgs";
import { DeleteDrumMovementHistoryArgs } from "./args/DeleteDrumMovementHistoryArgs";
import { DeleteManyDrumMovementHistoryArgs } from "./args/DeleteManyDrumMovementHistoryArgs";
import { FindFirstDrumMovementHistoryArgs } from "./args/FindFirstDrumMovementHistoryArgs";
import { FindManyDrumMovementHistoryArgs } from "./args/FindManyDrumMovementHistoryArgs";
import { FindUniqueDrumMovementHistoryArgs } from "./args/FindUniqueDrumMovementHistoryArgs";
import { GroupByDrumMovementHistoryArgs } from "./args/GroupByDrumMovementHistoryArgs";
import { UpdateDrumMovementHistoryArgs } from "./args/UpdateDrumMovementHistoryArgs";
import { UpdateManyDrumMovementHistoryArgs } from "./args/UpdateManyDrumMovementHistoryArgs";
import { UpsertDrumMovementHistoryArgs } from "./args/UpsertDrumMovementHistoryArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDrumMovementHistory } from "../../outputs/AggregateDrumMovementHistory";
import { DrumMovementHistoryGroupBy } from "../../outputs/DrumMovementHistoryGroupBy";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class DrumMovementHistoryCrudResolver {
  @TypeGraphQL.Query(_returns => DrumMovementHistory, {
    nullable: true
  })
  async drumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDrumMovementHistoryArgs): Promise<DrumMovementHistory | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => DrumMovementHistory, {
    nullable: true
  })
  async findFirstDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDrumMovementHistoryArgs): Promise<DrumMovementHistory | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [DrumMovementHistory], {
    nullable: false
  })
  async drumMovementHistories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDrumMovementHistoryArgs): Promise<DrumMovementHistory[]> {
    return getPrismaFromContext(ctx).drumMovementHistory.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumMovementHistory, {
    nullable: false
  })
  async createDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDrumMovementHistoryArgs): Promise<DrumMovementHistory> {
    return getPrismaFromContext(ctx).drumMovementHistory.create(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumMovementHistory, {
    nullable: true
  })
  async deleteDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDrumMovementHistoryArgs): Promise<DrumMovementHistory | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumMovementHistory, {
    nullable: true
  })
  async updateDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDrumMovementHistoryArgs): Promise<DrumMovementHistory | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDrumMovementHistoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumMovementHistory.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDrumMovementHistoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumMovementHistory.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumMovementHistory, {
    nullable: false
  })
  async upsertDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDrumMovementHistoryArgs): Promise<DrumMovementHistory> {
    return getPrismaFromContext(ctx).drumMovementHistory.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateDrumMovementHistory, {
    nullable: false
  })
  async aggregateDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrumMovementHistoryArgs): Promise<AggregateDrumMovementHistory> {
    return getPrismaFromContext(ctx).drumMovementHistory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [DrumMovementHistoryGroupBy], {
    nullable: false
  })
  async groupByDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDrumMovementHistoryArgs): Promise<DrumMovementHistoryGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).drumMovementHistory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
