import * as TypeGraphQL from "type-graphql";
import { FindManyDrumMovementHistoryArgs } from "./args/FindManyDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class FindManyDrumMovementHistoryResolver {
  @TypeGraphQL.Query(_returns => [DrumMovementHistory], {
    nullable: false
  })
  async drumMovementHistories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDrumMovementHistoryArgs): Promise<DrumMovementHistory[]> {
    return getPrismaFromContext(ctx).drumMovementHistory.findMany(args);
  }
}
