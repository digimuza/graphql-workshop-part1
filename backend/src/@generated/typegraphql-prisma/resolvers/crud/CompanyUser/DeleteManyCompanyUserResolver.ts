import * as TypeGraphQL from "type-graphql";
import { DeleteManyCompanyUserArgs } from "./args/DeleteManyCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class DeleteManyCompanyUserResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCompanyUserArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).companyUser.deleteMany(args);
  }
}
