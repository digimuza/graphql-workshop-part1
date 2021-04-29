import * as TypeGraphQL from "type-graphql";
import { FindFirstDrumStateHistoryArgs } from "./args/FindFirstDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class FindFirstDrumStateHistoryResolver {
  @TypeGraphQL.Query(_returns => DrumStateHistory, {
    nullable: true
  })
  async findFirstDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDrumStateHistoryArgs): Promise<DrumStateHistory | null> {
    return getPrismaFromContext(ctx).drumStateHistory.findFirst(args);
  }
}
