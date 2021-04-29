import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCompanyUserArgs } from "./args/AggregateCompanyUserArgs";
import { CompanyUser } from "../../../models/CompanyUser";
import { AggregateCompanyUser } from "../../outputs/AggregateCompanyUser";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class AggregateCompanyUserResolver {
  @TypeGraphQL.Query(_returns => AggregateCompanyUser, {
    nullable: false
  })
  async aggregateCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCompanyUserArgs): Promise<AggregateCompanyUser> {
    return getPrismaFromContext(ctx).companyUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
