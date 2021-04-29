import * as TypeGraphQL from "type-graphql";
import { DeleteCompanyUserArgs } from "./args/DeleteCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class DeleteCompanyUserResolver {
  @TypeGraphQL.Mutation(_returns => CompanyUser, {
    nullable: true
  })
  async deleteCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCompanyUserArgs): Promise<CompanyUser | null> {
    return getPrismaFromContext(ctx).companyUser.delete(args);
  }
}
