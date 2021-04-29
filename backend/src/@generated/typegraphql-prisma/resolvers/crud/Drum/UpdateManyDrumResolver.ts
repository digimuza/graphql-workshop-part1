import * as TypeGraphQL from "type-graphql";
import { UpdateManyDrumArgs } from "./args/UpdateManyDrumArgs";
import { Drum } from "../../../models/Drum";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class UpdateManyDrumResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDrumArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drum.updateMany(args);
  }
}
