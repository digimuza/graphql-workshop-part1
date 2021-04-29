import * as TypeGraphQL from "type-graphql";
import { FindUniqueCompanyUserArgs } from "./args/FindUniqueCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class FindUniqueCompanyUserResolver {
  @TypeGraphQL.Query(_returns => CompanyUser, {
    nullable: true
  })
  async companyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCompanyUserArgs): Promise<CompanyUser | null> {
    return getPrismaFromContext(ctx).companyUser.findUnique(args);
  }
}
