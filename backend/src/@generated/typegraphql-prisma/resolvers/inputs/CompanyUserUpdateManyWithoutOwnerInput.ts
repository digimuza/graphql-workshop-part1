import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUserCreateOrConnectWithoutOwnerInput } from "../inputs/CompanyUserCreateOrConnectWithoutOwnerInput";
import { CompanyUserCreateWithoutOwnerInput } from "../inputs/CompanyUserCreateWithoutOwnerInput";
import { CompanyUserScalarWhereInput } from "../inputs/CompanyUserScalarWhereInput";
import { CompanyUserUpdateManyWithWhereWithoutOwnerInput } from "../inputs/CompanyUserUpdateManyWithWhereWithoutOwnerInput";
import { CompanyUserUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/CompanyUserUpdateWithWhereUniqueWithoutOwnerInput";
import { CompanyUserUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/CompanyUserUpsertWithWhereUniqueWithoutOwnerInput";
import { CompanyUserWhereUniqueInput } from "../inputs/CompanyUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUserUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CompanyUserCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CompanyUserCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: CompanyUserCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: CompanyUserUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserWhereUniqueInput], {
    nullable: true
  })
  connect?: CompanyUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserWhereUniqueInput], {
    nullable: true
  })
  set?: CompanyUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CompanyUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserWhereUniqueInput], {
    nullable: true
  })
  delete?: CompanyUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: CompanyUserUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: CompanyUserUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CompanyUserScalarWhereInput[] | undefined;
}
