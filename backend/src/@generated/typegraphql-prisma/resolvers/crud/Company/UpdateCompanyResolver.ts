import * as TypeGraphQL from "type-graphql";
import { UpdateCompanyArgs } from "./args/UpdateCompanyArgs";
import { Company } from "../../../models/Company";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class UpdateCompanyResolver {
  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true
  })
  async updateCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCompanyArgs): Promise<Company | null> {
    return getPrismaFromContext(ctx).company.update(args);
  }
}
