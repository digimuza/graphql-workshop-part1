import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUserCreateOrConnectWithoutOwnerInput } from "../inputs/CompanyUserCreateOrConnectWithoutOwnerInput";
import { CompanyUserCreateWithoutOwnerInput } from "../inputs/CompanyUserCreateWithoutOwnerInput";
import { CompanyUserWhereUniqueInput } from "../inputs/CompanyUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUserCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CompanyUserCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CompanyUserCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: CompanyUserCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserWhereUniqueInput], {
    nullable: true
  })
  connect?: CompanyUserWhereUniqueInput[] | undefined;
}
