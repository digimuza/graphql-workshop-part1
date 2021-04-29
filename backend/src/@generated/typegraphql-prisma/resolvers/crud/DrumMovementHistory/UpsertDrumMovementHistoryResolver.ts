import * as TypeGraphQL from "type-graphql";
import { UpsertDrumMovementHistoryArgs } from "./args/UpsertDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class UpsertDrumMovementHistoryResolver {
  @TypeGraphQL.Mutation(_returns => DrumMovementHistory, {
    nullable: false
  })
  async upsertDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDrumMovementHistoryArgs): Promise<DrumMovementHistory> {
    return getPrismaFromContext(ctx).drumMovementHistory.upsert(args);
  }
}
