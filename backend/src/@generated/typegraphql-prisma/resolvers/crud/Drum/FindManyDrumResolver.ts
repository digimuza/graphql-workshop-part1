import * as TypeGraphQL from "type-graphql";
import { FindManyDrumArgs } from "./args/FindManyDrumArgs";
import { Drum } from "../../../models/Drum";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class FindManyDrumResolver {
  @TypeGraphQL.Query(_returns => [Drum], {
    nullable: false
  })
  async drums(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDrumArgs): Promise<Drum[]> {
    return getPrismaFromContext(ctx).drum.findMany(args);
  }
}
