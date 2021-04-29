import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { Location } from "../../../models/Location";
import { User } from "../../../models/User";
import { LocationCompaniesArgs } from "./args/LocationCompaniesArgs";
import { LocationDrumStateHistoryArgs } from "./args/LocationDrumStateHistoryArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class LocationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).location.findUnique({
      where: {
        id: location.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => [Company], {
    nullable: false
  })
  async companies(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LocationCompaniesArgs): Promise<Company[]> {
    return getPrismaFromContext(ctx).location.findUnique({
      where: {
        id: location.id,
      },
    }).companies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [DrumStateHistory], {
    nullable: false
  })
  async drumStateHistory(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LocationDrumStateHistoryArgs): Promise<DrumStateHistory[]> {
    return getPrismaFromContext(ctx).location.findUnique({
      where: {
        id: location.id,
      },
    }).drumStateHistory(args);
  }
}
