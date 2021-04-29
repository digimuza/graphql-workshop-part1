import * as TypeGraphQL from "type-graphql";
import { FindUniqueDrumStateHistoryArgs } from "./args/FindUniqueDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class FindUniqueDrumStateHistoryResolver {
  @TypeGraphQL.Query(_returns => DrumStateHistory, {
    nullable: true
  })
  async drumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDrumStateHistoryArgs): Promise<DrumStateHistory | null> {
    return getPrismaFromContext(ctx).drumStateHistory.findUnique(args);
  }
}
