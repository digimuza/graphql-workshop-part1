import * as TypeGraphQL from "type-graphql";
import { CreateLocationArgs } from "./args/CreateLocationArgs";
import { Location } from "../../../models/Location";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class CreateLocationResolver {
  @TypeGraphQL.Mutation(_returns => Location, {
    nullable: false
  })
  async createLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLocationArgs): Promise<Location> {
    return getPrismaFromContext(ctx).location.create(args);
  }
}
