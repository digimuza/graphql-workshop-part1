import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCompanyArgs } from "./args/AggregateCompanyArgs";
import { CreateCompanyArgs } from "./args/CreateCompanyArgs";
import { DeleteCompanyArgs } from "./args/DeleteCompanyArgs";
import { DeleteManyCompanyArgs } from "./args/DeleteManyCompanyArgs";
import { FindFirstCompanyArgs } from "./args/FindFirstCompanyArgs";
import { FindManyCompanyArgs } from "./args/FindManyCompanyArgs";
import { FindUniqueCompanyArgs } from "./args/FindUniqueCompanyArgs";
import { GroupByCompanyArgs } from "./args/GroupByCompanyArgs";
import { UpdateCompanyArgs } from "./args/UpdateCompanyArgs";
import { UpdateManyCompanyArgs } from "./args/UpdateManyCompanyArgs";
import { UpsertCompanyArgs } from "./args/UpsertCompanyArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Company } from "../../../models/Company";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCompany } from "../../outputs/AggregateCompany";
import { CompanyGroupBy } from "../../outputs/CompanyGroupBy";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyCrudResolver {
  @TypeGraphQL.Query(_returns => Company, {
    nullable: true
  })
  async company(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCompanyArgs): Promise<Company | null> {
    return getPrismaFromContext(ctx).company.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Company, {
    nullable: true
  })
  async findFirstCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCompanyArgs): Promise<Company | null> {
    return getPrismaFromContext(ctx).company.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Company], {
    nullable: false
  })
  async companies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCompanyArgs): Promise<Company[]> {
    return getPrismaFromContext(ctx).company.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false
  })
  async createCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCompanyArgs): Promise<Company> {
    return getPrismaFromContext(ctx).company.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true
  })
  async deleteCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCompanyArgs): Promise<Company | null> {
    return getPrismaFromContext(ctx).company.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true
  })
  async updateCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCompanyArgs): Promise<Company | null> {
    return getPrismaFromContext(ctx).company.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCompanyArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).company.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCompanyArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).company.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false
  })
  async upsertCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCompanyArgs): Promise<Company> {
    return getPrismaFromContext(ctx).company.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCompany, {
    nullable: false
  })
  async aggregateCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCompanyArgs): Promise<AggregateCompany> {
    return getPrismaFromContext(ctx).company.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
