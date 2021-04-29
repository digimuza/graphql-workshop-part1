import * as TypeGraphQL from "type-graphql";
import { UpdateManyCompanyUserArgs } from "./args/UpdateManyCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class UpdateManyCompanyUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCompanyUserArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).companyUser.updateMany(args);
  }
}
