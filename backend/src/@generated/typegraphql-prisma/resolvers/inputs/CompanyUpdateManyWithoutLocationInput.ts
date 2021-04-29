import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutLocationInput } from "../inputs/CompanyCreateOrConnectWithoutLocationInput";
import { CompanyCreateWithoutLocationInput } from "../inputs/CompanyCreateWithoutLocationInput";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyWithWhereWithoutLocationInput } from "../inputs/CompanyUpdateManyWithWhereWithoutLocationInput";
import { CompanyUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/CompanyUpdateWithWhereUniqueWithoutLocationInput";
import { CompanyUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/CompanyUpsertWithWhereUniqueWithoutLocationInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUpdateManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutLocationInput], {
    nullable: true
  })
  create?: CompanyCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: CompanyUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CompanyUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: CompanyUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: CompanyUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CompanyScalarWhereInput[] | undefined;
}
