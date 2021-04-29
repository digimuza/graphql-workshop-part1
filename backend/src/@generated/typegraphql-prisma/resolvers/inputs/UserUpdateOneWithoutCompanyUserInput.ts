import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCompanyUserInput } from "../inputs/UserCreateOrConnectWithoutCompanyUserInput";
import { UserCreateWithoutCompanyUserInput } from "../inputs/UserCreateWithoutCompanyUserInput";
import { UserUpdateWithoutCompanyUserInput } from "../inputs/UserUpdateWithoutCompanyUserInput";
import { UserUpsertWithoutCompanyUserInput } from "../inputs/UserUpsertWithoutCompanyUserInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutCompanyUserInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCompanyUserInput, {
    nullable: true
  })
  create?: UserCreateWithoutCompanyUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCompanyUserInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCompanyUserInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCompanyUserInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCompanyUserInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutCompanyUserInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCompanyUserInput | undefined;
}
