import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDrumTypeArgs } from "./args/AggregateDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { AggregateDrumType } from "../../outputs/AggregateDrumType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class AggregateDrumTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateDrumType, {
    nullable: false
  })
  async aggregateDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDrumTypeArgs): Promise<AggregateDrumType> {
    return getPrismaFromContext(ctx).drumType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
