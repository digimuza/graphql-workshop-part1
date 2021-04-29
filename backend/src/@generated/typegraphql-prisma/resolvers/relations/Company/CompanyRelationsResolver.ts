import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Location } from "../../../models/Location";
import { Marketplace } from "../../../models/Marketplace";
import { User } from "../../../models/User";
import { CompanyMarketplaceArgs } from "./args/CompanyMarketplaceArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).company.findUnique({
      where: {
        id: company.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Location, {
    nullable: true
  })
  async location(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any): Promise<Location | null> {
    return getPrismaFromContext(ctx).company.findUnique({
      where: {
        id: company.id,
      },
    }).location({});
  }

  @TypeGraphQL.FieldResolver(_type => [Marketplace], {
    nullable: false
  })
  async marketplace(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CompanyMarketplaceArgs): Promise<Marketplace[]> {
    return getPrismaFromContext(ctx).company.findUnique({
      where: {
        id: company.id,
      },
    }).marketplace(args);
  }
}
