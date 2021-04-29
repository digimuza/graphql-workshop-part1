import * as TypeGraphQL from "type-graphql";
import { Drum } from "../../../models/Drum";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { Location } from "../../../models/Location";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumStateHistory)
export class DrumStateHistoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() drumStateHistory: DrumStateHistory, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).drumStateHistory.findUnique({
      where: {
        id: drumStateHistory.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Drum, {
    nullable: false
  })
  async drum(@TypeGraphQL.Root() drumStateHistory: DrumStateHistory, @TypeGraphQL.Ctx() ctx: any): Promise<Drum> {
    return getPrismaFromContext(ctx).drumStateHistory.findUnique({
      where: {
        id: drumStateHistory.id,
      },
    }).drum({});
  }

  @TypeGraphQL.FieldResolver(_type => Location, {
    nullable: false
  })
  async location(@TypeGraphQL.Root() drumStateHistory: DrumStateHistory, @TypeGraphQL.Ctx() ctx: any): Promise<Location> {
    return getPrismaFromContext(ctx).drumStateHistory.findUnique({
      where: {
        id: drumStateHistory.id,
      },
    }).location({});
  }
}
