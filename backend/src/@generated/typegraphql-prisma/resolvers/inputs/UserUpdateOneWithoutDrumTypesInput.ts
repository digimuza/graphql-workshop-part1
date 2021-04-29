import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDrumTypesInput } from "../inputs/UserCreateOrConnectWithoutDrumTypesInput";
import { UserCreateWithoutDrumTypesInput } from "../inputs/UserCreateWithoutDrumTypesInput";
import { UserUpdateWithoutDrumTypesInput } from "../inputs/UserUpdateWithoutDrumTypesInput";
import { UserUpsertWithoutDrumTypesInput } from "../inputs/UserUpsertWithoutDrumTypesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutDrumTypesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDrumTypesInput, {
    nullable: true
  })
  create?: UserCreateWithoutDrumTypesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDrumTypesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDrumTypesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutDrumTypesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutDrumTypesInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutDrumTypesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutDrumTypesInput | undefined;
}
