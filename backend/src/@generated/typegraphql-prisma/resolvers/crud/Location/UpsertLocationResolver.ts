import * as TypeGraphQL from "type-graphql";
import { UpsertLocationArgs } from "./args/UpsertLocationArgs";
import { Location } from "../../../models/Location";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class UpsertLocationResolver {
  @TypeGraphQL.Mutation(_returns => Location, {
    nullable: false
  })
  async upsertLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLocationArgs): Promise<Location> {
    return getPrismaFromContext(ctx).location.upsert(args);
  }
}
