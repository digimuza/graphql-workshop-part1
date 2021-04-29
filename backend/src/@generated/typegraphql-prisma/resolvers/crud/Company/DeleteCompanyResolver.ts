import * as TypeGraphQL from "type-graphql";
import { DeleteCompanyArgs } from "./args/DeleteCompanyArgs";
import { Company } from "../../../models/Company";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class DeleteCompanyResolver {
  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true
  })
  async deleteCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCompanyArgs): Promise<Company | null> {
    return getPrismaFromContext(ctx).company.delete(args);
  }
}
