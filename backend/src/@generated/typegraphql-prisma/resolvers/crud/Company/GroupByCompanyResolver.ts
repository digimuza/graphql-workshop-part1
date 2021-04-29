import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCompanyArgs } from "./args/GroupByCompanyArgs";
import { Company } from "../../../models/Company";
import { CompanyGroupBy } from "../../outputs/CompanyGroupBy";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class GroupByCompanyResolver {
  @TypeGraphQL.Query(_returns => [CompanyGroupBy], {
    nullable: false
  })
  async groupByCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCompanyArgs): Promise<CompanyGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).company.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
