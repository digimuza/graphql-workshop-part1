import * as TypeGraphQL from "type-graphql";
import { UpsertDrumArgs } from "./args/UpsertDrumArgs";
import { Drum } from "../../../models/Drum";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class UpsertDrumResolver {
  @TypeGraphQL.Mutation(_returns => Drum, {
    nullable: false
  })
  async upsertDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDrumArgs): Promise<Drum> {
    return getPrismaFromContext(ctx).drum.upsert(args);
  }
}
