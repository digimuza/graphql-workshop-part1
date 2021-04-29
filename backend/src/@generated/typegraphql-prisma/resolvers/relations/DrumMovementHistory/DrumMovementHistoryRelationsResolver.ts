import * as TypeGraphQL from "type-graphql";
import { Drum } from "../../../models/Drum";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumMovementHistory)
export class DrumMovementHistoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() drumMovementHistory: DrumMovementHistory, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).drumMovementHistory.findUnique({
      where: {
        id: drumMovementHistory.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Drum, {
    nullable: false
  })
  async drum(@TypeGraphQL.Root() drumMovementHistory: DrumMovementHistory, @TypeGraphQL.Ctx() ctx: any): Promise<Drum> {
    return getPrismaFromContext(ctx).drumMovementHistory.findUnique({
      where: {
        id: drumMovementHistory.id,
      },
    }).drum({});
  }
}
