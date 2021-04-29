import * as TypeGraphQL from "type-graphql";
import { UpdateManyDrumMovementHistoryArgs } from "./args/UpdateManyDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class UpdateManyDrumMovementHistoryResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDrumMovementHistoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumMovementHistory.updateMany(args);
  }
}
