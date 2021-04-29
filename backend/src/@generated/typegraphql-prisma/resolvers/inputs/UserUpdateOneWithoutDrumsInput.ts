import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDrumsInput } from "../inputs/UserCreateOrConnectWithoutDrumsInput";
import { UserCreateWithoutDrumsInput } from "../inputs/UserCreateWithoutDrumsInput";
import { UserUpdateWithoutDrumsInput } from "../inputs/UserUpdateWithoutDrumsInput";
import { UserUpsertWithoutDrumsInput } from "../inputs/UserUpsertWithoutDrumsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutDrumsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDrumsInput, {
    nullable: true
  })
  create?: UserCreateWithoutDrumsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDrumsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDrumsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutDrumsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutDrumsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutDrumsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutDrumsInput | undefined;
}
