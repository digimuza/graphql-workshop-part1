import * as TypeGraphQL from "type-graphql";
import { DeleteMarketplaceArgs } from "./args/DeleteMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class DeleteMarketplaceResolver {
  @TypeGraphQL.Mutation(_returns => Marketplace, {
    nullable: true
  })
  async deleteMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMarketplaceArgs): Promise<Marketplace | null> {
    return getPrismaFromContext(ctx).marketplace.delete(args);
  }
}
