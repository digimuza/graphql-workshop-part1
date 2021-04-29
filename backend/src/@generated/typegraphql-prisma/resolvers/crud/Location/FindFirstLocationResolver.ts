import * as TypeGraphQL from "type-graphql";
import { FindFirstLocationArgs } from "./args/FindFirstLocationArgs";
import { Location } from "../../../models/Location";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class FindFirstLocationResolver {
  @TypeGraphQL.Query(_returns => Location, {
    nullable: true
  })
  async findFirstLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLocationArgs): Promise<Location | null> {
    return getPrismaFromContext(ctx).location.findFirst(args);
  }
}
