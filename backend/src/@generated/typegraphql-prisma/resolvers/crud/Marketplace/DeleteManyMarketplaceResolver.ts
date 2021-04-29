import * as TypeGraphQL from "type-graphql";
import { DeleteManyMarketplaceArgs } from "./args/DeleteManyMarketplaceArgs";
import { Marketplace } from "../../../models/Marketplace";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Marketplace)
export class DeleteManyMarketplaceResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMarketplace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyMarketplaceArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).marketplace.deleteMany(args);
  }
}
