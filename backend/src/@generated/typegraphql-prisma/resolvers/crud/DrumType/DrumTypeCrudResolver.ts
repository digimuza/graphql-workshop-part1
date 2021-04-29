import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrumTypeArgs } from "./args/AggregateDrumTypeArgs";
import { CreateDrumTypeArgs } from "./args/CreateDrumTypeArgs";
import { DeleteDrumTypeArgs } from "./args/DeleteDrumTypeArgs";
import { DeleteManyDrumTypeArgs } from "./args/DeleteManyDrumTypeArgs";
import { FindFirstDrumTypeArgs } from "./args/FindFirstDrumTypeArgs";
import { FindManyDrumTypeArgs } from "./args/FindManyDrumTypeArgs";
import { FindUniqueDrumTypeArgs } from "./args/FindUniqueDrumTypeArgs";
import { GroupByDrumTypeArgs } from "./args/GroupByDrumTypeArgs";
import { UpdateDrumTypeArgs } from "./args/UpdateDrumTypeArgs";
import { UpdateManyDrumTypeArgs } from "./args/UpdateManyDrumTypeArgs";
import { UpsertDrumTypeArgs } from "./args/UpsertDrumTypeArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { DrumType } from "../../../models/DrumType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDrumType } from "../../outputs/AggregateDrumType";
import { DrumTypeGroupBy } from "../../outputs/DrumTypeGroupBy";

@TypeGraphQL.Resolver(_of => DrumType)
export class DrumTypeCrudResolver {
  @TypeGraphQL.Query(_returns => DrumType, {
    nullable: true
  })
  async drumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDrumTypeArgs): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drumType.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => DrumType, {
    nullable: true
  })
  async findFirstDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDrumTypeArgs): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drumType.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [DrumType], {
    nullable: false
  })
  async drumTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDrumTypeArgs): Promise<DrumType[]> {
    return getPrismaFromContext(ctx).drumType.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumType, {
    nullable: false
  })
  async createDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDrumTypeArgs): Promise<DrumType> {
    return getPrismaFromContext(ctx).drumType.create(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumType, {
    nullable: true
  })
  async deleteDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDrumTypeArgs): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drumType.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumType, {
    nullable: true
  })
  async updateDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDrumTypeArgs): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drumType.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDrumTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumType.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDrumTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumType.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => DrumType, {
    nullable: false
  })
  async upsertDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDrumTypeArgs): Promise<DrumType> {
    return getPrismaFromContext(ctx).drumType.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateDrumType, {
    nullable: false
  })
  async aggregateDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrumTypeArgs): Promise<AggregateDrumType> {
    return getPrismaFromContext(ctx).drumType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [DrumTypeGroupBy], {
    nullable: false
  })
  async groupByDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDrumTypeArgs): Promise<DrumTypeGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).drumType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
