import * as TypeGraphQL from "type-graphql";
import { DeleteManyDrumStateHistoryArgs } from "./args/DeleteManyDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class DeleteManyDrumStateHistoryResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDrumStateHistoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumStateHistory.deleteMany(args);
  }
}
