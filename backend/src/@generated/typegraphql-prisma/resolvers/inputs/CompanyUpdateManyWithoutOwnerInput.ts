import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutOwnerInput } from "../inputs/CompanyCreateOrConnectWithoutOwnerInput";
import { CompanyCreateWithoutOwnerInput } from "../inputs/CompanyCreateWithoutOwnerInput";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyWithWhereWithoutOwnerInput } from "../inputs/CompanyUpdateManyWithWhereWithoutOwnerInput";
import { CompanyUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/CompanyUpdateWithWhereUniqueWithoutOwnerInput";
import { CompanyUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/CompanyUpsertWithWhereUniqueWithoutOwnerInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CompanyCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: CompanyUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  set?: CompanyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CompanyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  delete?: CompanyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: CompanyUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: CompanyUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CompanyScalarWhereInput[] | undefined;
}
