import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutOwnerInput } from "../inputs/CompanyCreateWithoutOwnerInput";
import { CompanyUpdateWithoutOwnerInput } from "../inputs/CompanyUpdateWithoutOwnerInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutOwnerInput;
}
