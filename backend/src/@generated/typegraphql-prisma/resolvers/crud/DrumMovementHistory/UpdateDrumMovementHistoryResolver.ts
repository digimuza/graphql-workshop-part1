import * as TypeGraphQL from "type-graphql";
import { UpdateDrumMovementHistoryArgs } from "./args/UpdateDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class UpdateDrumMovementHistoryResolver {
  @TypeGraphQL.Mutation(_returns => DrumMovementHistory, {
    nullable: true
  })
  async updateDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDrumMovementHistoryArgs): Promise<DrumMovementHistory | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.update(args);
  }
}
