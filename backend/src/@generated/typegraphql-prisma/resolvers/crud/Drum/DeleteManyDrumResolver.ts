import * as TypeGraphQL from "type-graphql";
import { DeleteManyDrumArgs } from "./args/DeleteManyDrumArgs";
import { Drum } from "../../../models/Drum";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class DeleteManyDrumResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDrumArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drum.deleteMany(args);
  }
}
