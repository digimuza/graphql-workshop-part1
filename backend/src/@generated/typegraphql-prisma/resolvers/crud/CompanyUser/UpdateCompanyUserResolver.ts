import * as TypeGraphQL from "type-graphql";
import { UpdateCompanyUserArgs } from "./args/UpdateCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class UpdateCompanyUserResolver {
  @TypeGraphQL.Mutation(_returns => CompanyUser, {
    nullable: true
  })
  async updateCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCompanyUserArgs): Promise<CompanyUser | null> {
    return getPrismaFromContext(ctx).companyUser.update(args);
  }
}
