import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrumStateHistoryArgs } from "./args/AggregateDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { AggregateDrumStateHistory } from "../../outputs/AggregateDrumStateHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class AggregateDrumStateHistoryResolver {
  @TypeGraphQL.Query(_returns => AggregateDrumStateHistory, {
    nullable: false
  })
  async aggregateDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrumStateHistoryArgs): Promise<AggregateDrumStateHistory> {
    return getPrismaFromContext(ctx).drumStateHistory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
