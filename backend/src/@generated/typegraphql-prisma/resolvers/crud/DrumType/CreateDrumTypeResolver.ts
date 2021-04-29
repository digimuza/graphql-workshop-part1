import * as TypeGraphQL from "type-graphql";
import { CreateDrumTypeArgs } from "./args/CreateDrumTypeArgs";
import { DrumType } from "../../../models/DrumType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DrumType)
export class CreateDrumTypeResolver {
  @TypeGraphQL.Mutation(_returns => DrumType, {
    nullable: false
  })
  async createDrumType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateDrumTypeArgs): Promise<DrumType> {
    return getPrismaFromContext(ctx).drumType.create(args);
  }
}
