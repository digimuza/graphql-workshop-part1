import * as TypeGraphQL from "type-graphql";
import { Drum } from "../../../models/Drum";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { DrumType } from "../../../models/DrumType";
import { User } from "../../../models/User";
import { DrumDrumMovementHistoryUpdatesArgs } from "./args/DrumDrumMovementHistoryUpdatesArgs";
import { DrumDrumStateHistoryUpdatesArgs } from "./args/DrumDrumStateHistoryUpdatesArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class DrumRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() drum: Drum, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).drum.findUnique({
      where: {
        id: drum.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => DrumType, {
    nullable: true
  })
  async drumType(@TypeGraphQL.Root() drum: Drum, @TypeGraphQL.Ctx() ctx: any): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drum.findUnique({
      where: {
        id: drum.id,
      },
    }).drumType({});
  }

  @TypeGraphQL.FieldResolver(_type => [DrumStateHistory], {
    nullable: false
  })
  async drumStateHistoryUpdates(@TypeGraphQL.Root() drum: Drum, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DrumDrumStateHistoryUpdatesArgs): Promise<DrumStateHistory[]> {
    return getPrismaFromContext(ctx).drum.findUnique({
      where: {
        id: drum.id,
      },
    }).drumStateHistoryUpdates(args);
  }

  @TypeGraphQL.FieldResolver(_type => [DrumMovementHistory], {
    nullable: false
  })
  async drumMovementHistoryUpdates(@TypeGraphQL.Root() drum: Drum, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DrumDrumMovementHistoryUpdatesArgs): Promise<DrumMovementHistory[]> {
    return getPrismaFromContext(ctx).drum.findUnique({
      where: {
        id: drum.id,
      },
    }).drumMovementHistoryUpdates(args);
  }
}
