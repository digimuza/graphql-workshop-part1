import * as TypeGraphQL from "type-graphql";
import { CreateDrumArgs } from "./args/CreateDrumArgs";
import { Drum } from "../../../models/Drum";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Drum)
export class CreateDrumResolver {
  @TypeGraphQL.Mutation(_returns => Drum, {
    nullable: false
  })
  async createDrum(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDrumArgs): Promise<Drum> {
    return getPrismaFromContext(ctx).drum.create(args);
  }
}
