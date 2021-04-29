import * as TypeGraphQL from "type-graphql";
import { FindFirstCompanyUserArgs } from "./args/FindFirstCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class FindFirstCompanyUserResolver {
  @TypeGraphQL.Query(_returns => CompanyUser, {
    nullable: true
  })
  async findFirstCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCompanyUserArgs): Promise<CompanyUser | null> {
    return getPrismaFromContext(ctx).companyUser.findFirst(args);
  }
}
