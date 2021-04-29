import * as TypeGraphQL from "type-graphql";
import { FindManyDrumTypeArgs } from "./args/FindManyDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class FindManyDrumTypeResolver {
  @TypeGraphQL.Query(_returns => [DrumType], {
    nullable: false
  })
  async drumTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyDrumTypeArgs): Promise<DrumType[]> {
    return getPrismaFromContext(ctx).drumType.findMany(args);
  }
}
