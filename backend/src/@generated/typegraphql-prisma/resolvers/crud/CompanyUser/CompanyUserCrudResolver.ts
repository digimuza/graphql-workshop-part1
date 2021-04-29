import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCompanyUserArgs } from "./args/AggregateCompanyUserArgs";
import { CreateCompanyUserArgs } from "./args/CreateCompanyUserArgs";
import { DeleteCompanyUserArgs } from "./args/DeleteCompanyUserArgs";
import { DeleteManyCompanyUserArgs } from "./args/DeleteManyCompanyUserArgs";
import { FindFirstCompanyUserArgs } from "./args/FindFirstCompanyUserArgs";
import { FindManyCompanyUserArgs } from "./args/FindManyCompanyUserArgs";
import { FindUniqueCompanyUserArgs } from "./args/FindUniqueCompanyUserArgs";
import { GroupByCompanyUserArgs } from "./args/GroupByCompanyUserArgs";
import { UpdateCompanyUserArgs } from "./args/UpdateCompanyUserArgs";
import { UpdateManyCompanyUserArgs } from "./args/UpdateManyCompanyUserArgs";
import { UpsertCompanyUserArgs } from "./args/UpsertCompanyUserArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CompanyUser } from "../../../models/CompanyUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCompanyUser } from "../../outputs/AggregateCompanyUser";
import { CompanyUserGroupBy } from "../../outputs/CompanyUserGroupBy";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class CompanyUserCrudResolver {
  @TypeGraphQL.Query(_returns => CompanyUser, {
    nullable: true
  })
  async companyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCompanyUserArgs): Promise<CompanyUser | null> {
    return getPrismaFromContext(ctx).companyUser.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CompanyUser, {
    nullable: true
  })
  async findFirstCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCompanyUserArgs): Promise<CompanyUser | null> {
    return getPrismaFromContext(ctx).companyUser.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CompanyUser], {
    nullable: false
  })
  async companyUsers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCompanyUserArgs): Promise<CompanyUser[]> {
    return getPrismaFromContext(ctx).companyUser.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CompanyUser, {
    nullable: false
  })
  async createCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCompanyUserArgs): Promise<CompanyUser> {
    return getPrismaFromContext(ctx).companyUser.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CompanyUser, {
    nullable: true
  })
  async deleteCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCompanyUserArgs): Promise<CompanyUser | null> {
    return getPrismaFromContext(ctx).companyUser.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CompanyUser, {
    nullable: true
  })
  async updateCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCompanyUserArgs): Promise<CompanyUser | null> {
    return getPrismaFromContext(ctx).companyUser.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCompanyUserArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).companyUser.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCompanyUserArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).companyUser.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CompanyUser, {
    nullable: false
  })
  async upsertCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCompanyUserArgs): Promise<CompanyUser> {
    return getPrismaFromContext(ctx).companyUser.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCompanyUser, {
    nullable: false
  })
  async aggregateCompanyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCompanyUserArgs): Promise<AggregateCompanyUser> {
    return getPrismaFromContext(ctx).companyUser.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
