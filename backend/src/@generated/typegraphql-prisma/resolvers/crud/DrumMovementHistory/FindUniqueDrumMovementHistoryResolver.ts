import * as TypeGraphQL from "type-graphql";
import { FindUniqueDrumMovementHistoryArgs } from "./args/FindUniqueDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class FindUniqueDrumMovementHistoryResolver {
  @TypeGraphQL.Query(_returns => DrumMovementHistory, {
    nullable: true
  })
  async drumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDrumMovementHistoryArgs): Promise<DrumMovementHistory | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.findUnique(args);
  }
}
