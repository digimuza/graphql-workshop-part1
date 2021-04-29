import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByDrumStateHistoryArgs } from "./args/GroupByDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { DrumStateHistoryGroupBy } from "../../outputs/DrumStateHistoryGroupBy";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class GroupByDrumStateHistoryResolver {
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
