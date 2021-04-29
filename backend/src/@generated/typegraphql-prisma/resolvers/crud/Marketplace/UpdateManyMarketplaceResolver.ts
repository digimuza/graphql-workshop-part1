import * as TypeGraphQL from "type-graphql";
import { UpdateManyMarketplaceArgs } from "./args/UpdateManyMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class UpdateManyMarketplaceResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyMarketplaceArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).marketplace.updateMany(args);
  }
}
