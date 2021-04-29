import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrumArgs } from "./args/AggregateDrumArgs";
import { Drum } from "../../../models/Drum";
import { AggregateDrum } from "../../outputs/AggregateDrum";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class AggregateDrumResolver {
  @TypeGraphQL.Query(_returns => AggregateDrum, {
    nullable: false
  })
  async aggregateDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrumArgs): Promise<AggregateDrum> {
    return getPrismaFromContext(ctx).drum.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
