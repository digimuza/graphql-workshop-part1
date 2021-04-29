import * as TypeGraphQL from "type-graphql";
import { UpdateDrumTypeArgs } from "./args/UpdateDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class UpdateDrumTypeResolver {
  @TypeGraphQL.Mutation(_returns => DrumType, {
    nullable: true
  })
  async updateDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateDrumTypeArgs): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drumType.update(args);
  }
}
