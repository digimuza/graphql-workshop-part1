import * as TypeGraphQL from "type-graphql";
import { UpdateDrumArgs } from "./args/UpdateDrumArgs";
import { Drum } from "../../../models/Drum";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class UpdateDrumResolver {
  @TypeGraphQL.Mutation(_returns => Drum, {
    nullable: true
  })
  async updateDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDrumArgs): Promise<Drum | null> {
    return getPrismaFromContext(ctx).drum.update(args);
  }
}
