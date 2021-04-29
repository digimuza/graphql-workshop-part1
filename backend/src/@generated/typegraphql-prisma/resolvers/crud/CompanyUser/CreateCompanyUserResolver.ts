import * as TypeGraphQL from "type-graphql";
import { CreateCompanyUserArgs } from "./args/CreateCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class CreateCompanyUserResolver {
  @TypeGraphQL.Mutation(_returns => CompanyUser, {
    nullable: false
  })
  async createCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCompanyUserArgs): Promise<CompanyUser> {
    return getPrismaFromContext(ctx).companyUser.create(args);
  }
}
