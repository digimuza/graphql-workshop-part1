import * as TypeGraphQL from "type-graphql";
import { UpdateMarketplaceArgs } from "./args/UpdateMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class UpdateMarketplaceResolver {
  @TypeGraphQL.Mutation(_returns => Marketplace, {
    nullable: true
  })
  async updateMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMarketplaceArgs): Promise<Marketplace | null> {
    return getPrismaFromContext(ctx).marketplace.update(args);
  }
}
