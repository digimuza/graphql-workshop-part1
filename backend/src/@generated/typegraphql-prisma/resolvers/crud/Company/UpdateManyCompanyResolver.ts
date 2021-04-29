import * as TypeGraphQL from "type-graphql";
import { UpdateManyCompanyArgs } from "./args/UpdateManyCompanyArgs";
import { Company } from "../../../models/Company";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class UpdateManyCompanyResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCompanyArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).company.updateMany(args);
  }
}
