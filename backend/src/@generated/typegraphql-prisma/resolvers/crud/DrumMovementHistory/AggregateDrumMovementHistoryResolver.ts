import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrumMovementHistoryArgs } from "./args/AggregateDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { AggregateDrumMovementHistory } from "../../outputs/AggregateDrumMovementHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class AggregateDrumMovementHistoryResolver {
  @TypeGraphQL.Query(_returns => AggregateDrumMovementHistory, {
    nullable: false
  })
  async aggregateDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrumMovementHistoryArgs): Promise<AggregateDrumMovementHistory> {
    return getPrismaFromContext(ctx).drumMovementHistory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
