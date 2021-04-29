import * as TypeGraphQL from "type-graphql";
import { DeleteManyDrumMovementHistoryArgs } from "./args/DeleteManyDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class DeleteManyDrumMovementHistoryResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDrumMovementHistoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumMovementHistory.deleteMany(args);
  }
}
