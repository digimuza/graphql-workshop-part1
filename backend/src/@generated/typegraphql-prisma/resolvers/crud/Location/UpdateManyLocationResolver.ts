import * as TypeGraphQL from "type-graphql";
import { UpdateManyLocationArgs } from "./args/UpdateManyLocationArgs";
import { Location } from "../../../models/Location";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class UpdateManyLocationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLocationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).location.updateMany(args);
  }
}
