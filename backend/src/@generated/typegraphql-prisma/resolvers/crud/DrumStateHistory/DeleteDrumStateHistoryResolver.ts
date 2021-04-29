import * as TypeGraphQL from "type-graphql";
import { DeleteDrumStateHistoryArgs } from "./args/DeleteDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class DeleteDrumStateHistoryResolver {
  @TypeGraphQL.Mutation(_returns => DrumStateHistory, {
    nullable: true
  })
  async deleteDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDrumStateHistoryArgs): Promise<DrumStateHistory | null> {
    return getPrismaFromContext(ctx).drumStateHistory.delete(args);
  }
}
