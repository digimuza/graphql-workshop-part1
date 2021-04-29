import * as TypeGraphQL from "type-graphql";
import { FindFirstDrumTypeArgs } from "./args/FindFirstDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class FindFirstDrumTypeResolver {
  @TypeGraphQL.Query(_returns => DrumType, {
    nullable: true
  })
  async findFirstDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstDrumTypeArgs): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drumType.findFirst(args);
  }
}
