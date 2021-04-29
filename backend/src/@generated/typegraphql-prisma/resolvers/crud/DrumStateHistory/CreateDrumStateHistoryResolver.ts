import * as TypeGraphQL from "type-graphql";
import { CreateDrumStateHistoryArgs } from "./args/CreateDrumStateHistoryArgs";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class CreateDrumStateHistoryResolver {
  @TypeGraphQL.Mutation(_returns => DrumStateHistory, {
    nullable: false
  })
  async createDrumStateHistory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDrumStateHistoryArgs): Promise<DrumStateHistory> {
    return getPrismaFromContext(ctx).drumStateHistory.create(args);
  }
}
