import * as TypeGraphQL from "type-graphql";
import { DeleteManyLocationArgs } from "./args/DeleteManyLocationArgs";
import { Location } from "../../../models/Location";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class DeleteManyLocationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLocationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).location.deleteMany(args);
  }
}
