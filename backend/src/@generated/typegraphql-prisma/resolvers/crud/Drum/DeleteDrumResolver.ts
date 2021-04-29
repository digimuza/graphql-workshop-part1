import * as TypeGraphQL from "type-graphql";
import { DeleteDrumArgs } from "./args/DeleteDrumArgs";
import { Drum } from "../../../models/Drum";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class DeleteDrumResolver {
  @TypeGraphQL.Mutation(_returns => Drum, {
    nullable: true
  })
  async deleteDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDrumArgs): Promise<Drum | null> {
    return getPrismaFromContext(ctx).drum.delete(args);
  }
}
