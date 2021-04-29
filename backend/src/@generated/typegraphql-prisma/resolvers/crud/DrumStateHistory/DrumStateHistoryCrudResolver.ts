import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrumStateHistoryArgs } from "./args/AggregateDrumStateHistoryArgs";
import { CreateDrumStateHistoryArgs } from "./args/CreateDrumStateHistoryArgs";
import { DeleteDrumStateHistoryArgs } from "./args/DeleteDrumStateHistoryArgs";
import { DeleteManyDrumStateHistoryArgs } from "./args/DeleteManyDrumStateHistoryArgs";
import { FindFirstDrumStateHistoryArgs } from "./args/FindFirstDrumStateHistoryArgs";
import { FindManyDrumStateHistoryArgs } from "./args/FindManyDrumStateHistoryArgs";
import { FindUniqueDrumStateHistoryArgs } from "./args/FindUniqueDrumStateHistoryArgs";
import { GroupByDrumStateHistoryArgs } from "./args/GroupByDrumStateHistoryArgs";
import { UpdateDrumStateHistoryArgs } from "./args/UpdateDrumStateHistoryArgs";
import { UpdateManyDrumStateHistoryArgs } from "./args/UpdateManyDrumStateHistoryArgs";
import { UpsertDrumStateHistoryArgs } from "./args/UpsertDrumStateHistoryArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDrumStateHistory } from "../../outputs/AggregateDrumStateHistory";
import { DrumStateHistoryGroupBy } from "../../outputs/DrumStateHistoryGroupBy";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class DrumStateHistoryCrudResolver {
  @TypeGraphQL.Query(_returns => DrumStateHistory, {
    nullable: true
  })
  async drumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDrumStateHistoryArgs): Promise<DrumStateHistory | null> {
    return getPrismaFromContext(ctx).drumStateHistory.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => DrumStateHistory, {
    nullable: true
  })
  async findFirstDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDrumStateHistoryArgs): Promise<DrumStateHistory | null> {
    return getPrismaFromContext(ctx).drumStateHistory.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [DrumStateHistory], {
    nullable: false
  })
  async drumStateHistories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDrumStateHistoryArgs): Promise<DrumStateHistory[]> {
    return getPrismaFromContext(ctx).drumStateHistory.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumStateHistory, {
    nullable: false
  })
  async createDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDrumStateHistoryArgs): Promise<DrumStateHistory> {
    return getPrismaFromContext(ctx).drumStateHistory.create(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumStateHistory, {
    nullable: true
  })
  async deleteDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDrumStateHistoryArgs): Promise<DrumStateHistory | null> {
    return getPrismaFromContext(ctx).drumStateHistory.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumStateHistory, {
    nullable: true
  })
  async updateDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDrumStateHistoryArgs): Promise<DrumStateHistory | null> {
    return getPrismaFromContext(ctx).drumStateHistory.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDrumStateHistoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumStateHistory.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDrumStateHistoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumStateHistory.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumStateHistory, {
    nullable: false
  })
  async upsertDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDrumStateHistoryArgs): Promise<DrumStateHistory> {
    return getPrismaFromContext(ctx).drumStateHistory.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateDrumStateHistory, {
    nullable: false
  })
  async aggregateDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrumStateHistoryArgs): Promise<AggregateDrumStateHistory> {
    return getPrismaFromContext(ctx).drumStateHistory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [DrumStateHistoryGroupBy], {
    nullable: false
  })
  async groupByDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDrumStateHistoryArgs): Promise<DrumStateHistoryGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).drumStateHistory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
