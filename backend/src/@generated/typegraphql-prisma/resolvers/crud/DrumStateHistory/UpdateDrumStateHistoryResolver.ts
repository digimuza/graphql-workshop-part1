import * as TypeGraphQL from "type-graphql";
import { UpdateDrumStateHistoryArgs } from "./args/UpdateDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class UpdateDrumStateHistoryResolver {
  @TypeGraphQL.Mutation(_returns => DrumStateHistory, {
    nullable: true
  })
  async updateDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDrumStateHistoryArgs): Promise<DrumStateHistory | null> {
    return getPrismaFromContext(ctx).drumStateHistory.update(args);
  }
}
