import * as TypeGraphQL from "type-graphql";
import { FindUniqueCompanyArgs } from "./args/FindUniqueCompanyArgs";
import { Company } from "../../../models/Company";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class FindUniqueCompanyResolver {
  @TypeGraphQL.Query(_returns => Company, {
    nullable: true
  })
  async company(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCompanyArgs): Promise<Company | null> {
    return getPrismaFromContext(ctx).company.findUnique(args);
  }
}
