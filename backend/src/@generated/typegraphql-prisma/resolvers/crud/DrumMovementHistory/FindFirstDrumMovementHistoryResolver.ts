import * as TypeGraphQL from "type-graphql";
import { FindFirstDrumMovementHistoryArgs } from "./args/FindFirstDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class FindFirstDrumMovementHistoryResolver {
  @TypeGraphQL.Query(_returns => DrumMovementHistory, {
    nullable: true
  })
  async findFirstDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDrumMovementHistoryArgs): Promise<DrumMovementHistory | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.findFirst(args);
  }
}
