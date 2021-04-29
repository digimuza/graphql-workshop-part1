import * as TypeGraphQL from "type-graphql";
import { CreateDrumMovementHistoryArgs } from "./args/CreateDrumMovementHistoryArgs";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class CreateDrumMovementHistoryResolver {
  @TypeGraphQL.Mutation(_returns => DrumMovementHistory, {
    nullable: false
  })
  async createDrumMovementHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDrumMovementHistoryArgs): Promise<DrumMovementHistory> {
    return getPrismaFromContext(ctx).drumMovementHistory.create(args);
  }
}
