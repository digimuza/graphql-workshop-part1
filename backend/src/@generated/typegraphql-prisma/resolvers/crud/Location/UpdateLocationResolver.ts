import * as TypeGraphQL from "type-graphql";
import { UpdateLocationArgs } from "./args/UpdateLocationArgs";
import { Location } from "../../../models/Location";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class UpdateLocationResolver {
  @TypeGraphQL.Mutation(_returns => Location, {
    nullable: true
  })
  async updateLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLocationArgs): Promise<Location | null> {
    return getPrismaFromContext(ctx).location.update(args);
  }
}
