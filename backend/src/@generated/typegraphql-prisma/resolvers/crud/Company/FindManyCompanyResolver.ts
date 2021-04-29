import * as TypeGraphQL from "type-graphql";
import { FindManyCompanyArgs } from "./args/FindManyCompanyArgs";
import { Company } from "../../../models/Company";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class FindManyCompanyResolver {
  @TypeGraphQL.Query(_returns => [Company], {
    nullable: false
  })
  async companies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCompanyArgs): Promise<Company[]> {
    return getPrismaFromContext(ctx).company.findMany(args);
  }
}
