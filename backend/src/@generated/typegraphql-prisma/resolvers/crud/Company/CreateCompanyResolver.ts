import * as TypeGraphQL from "type-graphql";
import { CreateCompanyArgs } from "./args/CreateCompanyArgs";
import { Company } from "../../../models/Company";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class CreateCompanyResolver {
  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false
  })
  async createCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCompanyArgs): Promise<Company> {
    return getPrismaFromContext(ctx).company.create(args);
  }
}
