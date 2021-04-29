import * as TypeGraphQL from "type-graphql";
import { FindManyDrumStateHistoryArgs } from "./args/FindManyDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class FindManyDrumStateHistoryResolver {
  @TypeGraphQL.Query(_returns => [DrumStateHistory], {
    nullable: false
  })
  async drumStateHistories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDrumStateHistoryArgs): Promise<DrumStateHistory[]> {
    return getPrismaFromContext(ctx).drumStateHistory.findMany(args);
  }
}
