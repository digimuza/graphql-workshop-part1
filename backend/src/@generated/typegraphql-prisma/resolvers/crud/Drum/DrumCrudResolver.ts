import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrumArgs } from "./args/AggregateDrumArgs";
import { CreateDrumArgs } from "./args/CreateDrumArgs";
import { DeleteDrumArgs } from "./args/DeleteDrumArgs";
import { DeleteManyDrumArgs } from "./args/DeleteManyDrumArgs";
import { FindFirstDrumArgs } from "./args/FindFirstDrumArgs";
import { FindManyDrumArgs } from "./args/FindManyDrumArgs";
import { FindUniqueDrumArgs } from "./args/FindUniqueDrumArgs";
import { GroupByDrumArgs } from "./args/GroupByDrumArgs";
import { UpdateDrumArgs } from "./args/UpdateDrumArgs";
import { UpdateManyDrumArgs } from "./args/UpdateManyDrumArgs";
import { UpsertDrumArgs } from "./args/UpsertDrumArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Drum } from "../../../models/Drum";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDrum } from "../../outputs/AggregateDrum";
import { DrumGroupBy } from "../../outputs/DrumGroupBy";

@TypeGraphQL.Resolver(_of => Drum)
export class DrumCrudResolver {
  @TypeGraphQL.Query(_returns => Drum, {
    nullable: true
  })
  async drum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDrumArgs): Promise<Drum | null> {
    return getPrismaFromContext(ctx).drum.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Drum, {
    nullable: true
  })
  async findFirstDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDrumArgs): Promise<Drum | null> {
    return getPrismaFromContext(ctx).drum.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Drum], {
    nullable: false
  })
  async drums(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDrumArgs): Promise<Drum[]> {
    return getPrismaFromContext(ctx).drum.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Drum, {
    nullable: false
  })
  async createDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDrumArgs): Promise<Drum> {
    return getPrismaFromContext(ctx).drum.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Drum, {
    nullable: true
  })
  async deleteDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDrumArgs): Promise<Drum | null> {
    return getPrismaFromContext(ctx).drum.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Drum, {
    nullable: true
  })
  async updateDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDrumArgs): Promise<Drum | null> {
    return getPrismaFromContext(ctx).drum.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDrumArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drum.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDrumArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drum.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Drum, {
    nullable: false
  })
  async upsertDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDrumArgs): Promise<Drum> {
    return getPrismaFromContext(ctx).drum.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateDrum, {
    nullable: false
  })
  async aggregateDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrumArgs): Promise<AggregateDrum> {
    return getPrismaFromContext(ctx).drum.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [DrumGroupBy], {
    nullable: false
  })
  async groupByDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDrumArgs): Promise<DrumGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).drum.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
