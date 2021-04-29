import * as TypeGraphQL from "type-graphql";
import { UpsertCompanyUserArgs } from "./args/UpsertCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class UpsertCompanyUserResolver {
  @TypeGraphQL.Mutation(_returns => CompanyUser, {
    nullable: false
  })
  async upsertCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCompanyUserArgs): Promise<CompanyUser> {
    return getPrismaFromContext(ctx).companyUser.upsert(args);
  }
}
