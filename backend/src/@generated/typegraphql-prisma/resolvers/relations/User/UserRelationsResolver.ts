import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { CompanyUser } from "../../../models/CompanyUser";
import { Drum } from "../../../models/Drum";
import { DrumMovementHistory } from "../../../models/DrumMovementHistory";
import { DrumStateHistory } from "../../../models/DrumStateHistory";
import { DrumType } from "../../../models/DrumType";
import { Location } from "../../../models/Location";
import { Marketplace } from "../../../models/Marketplace";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserCompaniesArgs } from "./args/UserCompaniesArgs";
import { UserCompanyUserArgs } from "./args/UserCompanyUserArgs";
import { UserDrumMovementHistoryUpdatesArgs } from "./args/UserDrumMovementHistoryUpdatesArgs";
import { UserDrumStateHistoryUpdatesArgs } from "./args/UserDrumStateHistoryUpdatesArgs";
import { UserDrumTypesArgs } from "./args/UserDrumTypesArgs";
import { UserDrumsArgs } from "./args/UserDrumsArgs";
import { UserLocationsArgs } from "./args/UserLocationsArgs";
import { UserMarketplacesArgs } from "./args/UserMarketplacesArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Company], {
    nullable: false
  })
  async companies(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCompaniesArgs): Promise<Company[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).companies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Location], {
    nullable: false
  })
  async locations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLocationsArgs): Promise<Location[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).locations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Marketplace], {
    nullable: false
  })
  async marketplaces(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserMarketplacesArgs): Promise<Marketplace[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).marketplaces(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Drum], {
    nullable: false
  })
  async drums(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserDrumsArgs): Promise<Drum[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).drums(args);
  }

  @TypeGraphQL.FieldResolver(_type => [DrumType], {
    nullable: false
  })
  async drumTypes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserDrumTypesArgs): Promise<DrumType[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).drumTypes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [DrumStateHistory], {
    nullable: false
  })
  async drumStateHistoryUpdates(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserDrumStateHistoryUpdatesArgs): Promise<DrumStateHistory[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).drumStateHistoryUpdates(args);
  }

  @TypeGraphQL.FieldResolver(_type => [DrumMovementHistory], {
    nullable: false
  })
  async drumMovementHistoryUpdates(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserDrumMovementHistoryUpdatesArgs): Promise<DrumMovementHistory[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).drumMovementHistoryUpdates(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CompanyUser], {
    nullable: false
  })
  async companyUser(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCompanyUserArgs): Promise<CompanyUser[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).companyUser(args);
  }
}
