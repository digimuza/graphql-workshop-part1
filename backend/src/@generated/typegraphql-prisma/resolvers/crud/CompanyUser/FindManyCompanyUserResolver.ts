import * as TypeGraphQL from "type-graphql";
import { FindManyCompanyUserArgs } from "./args/FindManyCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class FindManyCompanyUserResolver {
  @TypeGraphQL.Query(_returns => [CompanyUser], {
    nullable: false
  })
  async companyUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCompanyUserArgs): Promise<CompanyUser[]> {
    return getPrismaFromContext(ctx).companyUser.findMany(args);
  }
}
