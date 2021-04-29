import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutOwnerInput } from "../inputs/CompanyCreateOrConnectWithoutOwnerInput";
import { CompanyCreateWithoutOwnerInput } from "../inputs/CompanyCreateWithoutOwnerInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CompanyCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput[] | undefined;
}
