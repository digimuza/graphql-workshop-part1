import * as TypeGraphQL from "type-graphql";
import { CompanyUser } from "../../../models/CompanyUser";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CompanyUser)
export class CompanyUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async owner(@TypeGraphQL.Root() companyUser: CompanyUser, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).companyUser.findUnique({
      where: {
        id: companyUser.id,
      },
    }).owner({});
  }
}
