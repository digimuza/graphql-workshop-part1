import * as TypeGraphQL from "type-graphql";
import { UpdateManyDrumTypeArgs } from "./args/UpdateManyDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class UpdateManyDrumTypeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDrumTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).drumType.updateMany(args);
  }
}
