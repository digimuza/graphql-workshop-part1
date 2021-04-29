import * as TypeGraphQL from "type-graphql";
import { FindUniqueDrumTypeArgs } from "./args/FindUniqueDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class FindUniqueDrumTypeResolver {
  @TypeGraphQL.Query(_returns => DrumType, {
    nullable: true
  })
  async drumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueDrumTypeArgs): Promise<DrumType | null> {
    return getPrismaFromContext(ctx).drumType.findUnique(args);
  }
}
