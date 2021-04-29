import * as TypeGraphQL from "type-graphql";
import { DeleteManyDrumTypeArgs } from "./args/DeleteManyDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class DeleteManyDrumTypeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDrumTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumType.deleteMany(args);
  }
}
