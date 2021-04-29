import * as TypeGraphQL from "type-graphql";
import { FindFirstDrumArgs } from "./args/FindFirstDrumArgs";
import { Drum } from "../../../models/Drum";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class FindFirstDrumResolver {
  @TypeGraphQL.Query(_returns => Drum, {
    nullable: true
  })
  async findFirstDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDrumArgs): Promise<Drum | null> {
    return getPrismaFromContext(ctx).drum.findFirst(args);
  }
}
