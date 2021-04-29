import * as TypeGraphQL from "type-graphql";
import { DeleteManyCompanyArgs } from "./args/DeleteManyCompanyArgs";
import { Company } from "../../../models/Company";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class DeleteManyCompanyResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCompanyArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).company.deleteMany(args);
  }
}
