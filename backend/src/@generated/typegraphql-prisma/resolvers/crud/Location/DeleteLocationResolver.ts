import * as TypeGraphQL from "type-graphql";
import { DeleteLocationArgs } from "./args/DeleteLocationArgs";
import { Location } from "../../../models/Location";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class DeleteLocationResolver {
  @TypeGraphQL.Mutation(_returns => Location, {
    nullable: true
  })
  async deleteLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLocationArgs): Promise<Location | null> {
    return getPrismaFromContext(ctx).location.delete(args);
  }
}
