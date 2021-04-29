import * as TypeGraphQL from "type-graphql";
import { UpsertCompanyArgs } from "./args/UpsertCompanyArgs";
import { Company } from "../../../models/Company";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class UpsertCompanyResolver {
  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false
  })
  async upsertCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCompanyArgs): Promise<Company> {
    return getPrismaFromContext(ctx).company.upsert(args);
  }
}
