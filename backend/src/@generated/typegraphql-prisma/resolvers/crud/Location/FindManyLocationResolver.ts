import * as TypeGraphQL from "type-graphql";
import { FindManyLocationArgs } from "./args/FindManyLocationArgs";
import { Location } from "../../../models/Location";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class FindManyLocationResolver {
  @TypeGraphQL.Query(_returns => [Location], {
    nullable: false
  })
  async locations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLocationArgs): Promise<Location[]> {
    return getPrismaFromContext(ctx).location.findMany(args);
  }
}
