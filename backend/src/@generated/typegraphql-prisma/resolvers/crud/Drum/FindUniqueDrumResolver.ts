import * as TypeGraphQL from "type-graphql";
import { FindUniqueDrumArgs } from "./args/FindUniqueDrumArgs";
import { Drum } from "../../../models/Drum";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class FindUniqueDrumResolver {
  @TypeGraphQL.Query(_returns => Drum, {
    nullable: true
  })
  async drum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDrumArgs): Promise<Drum | null> {
    return getPrismaFromContext(ctx).drum.findUnique(args);
  }
}
