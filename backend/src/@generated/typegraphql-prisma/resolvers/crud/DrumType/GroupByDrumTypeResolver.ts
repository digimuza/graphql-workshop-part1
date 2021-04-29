import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByDrumTypeArgs } from "./args/GroupByDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { DrumTypeGroupBy } from "../../outputs/DrumTypeGroupBy";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class GroupByDrumTypeResolver {
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
