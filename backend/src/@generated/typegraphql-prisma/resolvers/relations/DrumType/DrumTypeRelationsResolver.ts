import * as TypeGraphQL from "type-graphql";
import { Drum } from "../../../models/Drum";
import { DrumType } from "../../../models/DrumType";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class DrumTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() drumType: DrumType, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).drumType.findUnique({
      where: {
        id: drumType.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Drum, {
    nullable: false
  })
  async drum(@TypeGraphQL.Root() drumType: DrumType, @TypeGraphQL.Ctx() ctx: any): Promise<Drum> {
    return getPrismaFromContext(ctx).drumType.findUnique({
      where: {
        id: drumType.id,
      },
    }).drum({});
  }
}
