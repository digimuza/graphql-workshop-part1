import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Marketplace } from "../../../models/Marketplace";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class MarketplaceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() marketplace: Marketplace, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).marketplace.findUnique({
      where: {
        id: marketplace.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: true
  })
  async company(@TypeGraphQL.Root() marketplace: Marketplace, @TypeGraphQL.Ctx() ctx: any): Promise<Company | null> {
    return getPrismaFromContext(ctx).marketplace.findUnique({
      where: {
        id: marketplace.id,
      },
    }).company({});
  }
}
