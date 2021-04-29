import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutLocationInput } from "../inputs/CompanyCreateOrConnectWithoutLocationInput";
import { CompanyCreateWithoutLocationInput } from "../inputs/CompanyCreateWithoutLocationInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutLocationInput], {
    nullable: true
  })
  create?: CompanyCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput[] | undefined;
}
