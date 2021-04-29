import * as TypeGraphQL from "type-graphql";
import { DeleteDrumMovementHistoryArgs } from "./args/DeleteDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class DeleteDrumMovementHistoryResolver {
  @TypeGraphQL.Mutation(_returns => DrumMovementHistory, {
    nullable: true
  })
  async deleteDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDrumMovementHistoryArgs): Promise<DrumMovementHistory | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.delete(args);
  }
}
