import * as TypeGraphQL from "type-graphql";
import { CreateMarketplaceArgs } from "./args/CreateMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class CreateMarketplaceResolver {
  @TypeGraphQL.Mutation(_returns => Marketplace, {
    nullable: false
  })
  async createMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMarketplaceArgs): Promise<Marketplace> {
    return getPrismaFromContext(ctx).marketplace.create(args);
  }
}
