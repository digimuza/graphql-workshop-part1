import * as TypeGraphQL from "type-graphql";
import { DeleteDrumTypeArgs } from "./args/DeleteDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class DeleteDrumTypeResolver {
  @TypeGraphQL.Mutation(_returns => DrumType, {
    nullable: true
  })
  async deleteDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteDrumTypeArgs): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drumType.delete(args);
  }
}
