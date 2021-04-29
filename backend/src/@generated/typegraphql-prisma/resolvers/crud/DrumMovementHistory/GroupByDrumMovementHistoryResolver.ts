import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByDrumMovementHistoryArgs } from "./args/GroupByDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { DrumMovementHistoryGroupBy } from "../../outputs/DrumMovementHistoryGroupBy";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class GroupByDrumMovementHistoryResolver {
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
