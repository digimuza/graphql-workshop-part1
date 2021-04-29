import * as TypeGraphQL from "type-graphql";
import { UpsertDrumStateHistoryArgs } from "./args/UpsertDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class UpsertDrumStateHistoryResolver {
  @TypeGraphQL.Mutation(_returns => DrumStateHistory, {
    nullable: false
  })
  async upsertDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDrumStateHistoryArgs): Promise<DrumStateHistory> {
    return getPrismaFromContext(ctx).drumStateHistory.upsert(args);
  }
}
