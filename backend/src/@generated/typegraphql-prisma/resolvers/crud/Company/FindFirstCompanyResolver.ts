import * as TypeGraphQL from "type-graphql";
import { FindFirstCompanyArgs } from "./args/FindFirstCompanyArgs";
import { Company } from "../../../models/Company";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class FindFirstCompanyResolver {
  @TypeGraphQL.Query(_returns => Company, {
    nullable: true
  })
  async findFirstCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCompanyArgs): Promise<Company | null> {
    return getPrismaFromContext(ctx).company.findFirst(args);
  }
}
