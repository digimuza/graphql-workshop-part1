import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDrumsInput } from "../inputs/UserCreateOrConnectWithoutDrumsInput";
import { UserCreateWithoutDrumsInput } from "../inputs/UserCreateWithoutDrumsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutDrumsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDrumsInput, {
    nullable: true
  })
  create?: UserCreateWithoutDrumsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDrumsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDrumsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
