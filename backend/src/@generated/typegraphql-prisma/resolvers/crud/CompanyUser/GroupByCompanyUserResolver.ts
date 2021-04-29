import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCompanyUserArgs } from "./args/GroupByCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { CompanyUserGroupBy } from "../../outputs/CompanyUserGroupBy";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class GroupByCompanyUserResolver {
  @TypeGraphQL.Query(_returns => [CompanyUserGroupBy], {
    nullable: false
  })
  async groupByCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCompanyUserArgs): Promise<CompanyUserGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).companyUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
