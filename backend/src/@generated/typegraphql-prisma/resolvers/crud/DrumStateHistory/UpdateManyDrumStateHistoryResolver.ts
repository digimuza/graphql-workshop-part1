import * as TypeGraphQL from "type-graphql";
import { UpdateManyDrumStateHistoryArgs } from "./args/UpdateManyDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class UpdateManyDrumStateHistoryResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDrumStateHistoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumStateHistory.updateMany(args);
  }
}
