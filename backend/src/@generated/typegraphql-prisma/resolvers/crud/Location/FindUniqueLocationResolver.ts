import * as TypeGraphQL from "type-graphql";
import { FindUniqueLocationArgs } from "./args/FindUniqueLocationArgs";
import { Location } from "../../../models/Location";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class FindUniqueLocationResolver {
  @TypeGraphQL.Query(_returns => Location, {
    nullable: true
  })
  async location(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLocationArgs): Promise<Location | null> {
    return getPrismaFromContext(ctx).location.findUnique(args);
  }
}
