import * as TypeGraphQL from "type-graphql";
import { UpsertDrumTypeArgs } from "./args/UpsertDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class UpsertDrumTypeResolver {
  @TypeGraphQL.Mutation(_returns => DrumType, {
    nullable: false
  })
  async upsertDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDrumTypeArgs): Promise<DrumType> {
    return getPrismaFromContext(ctx).drumType.upsert(args);
  }
}
