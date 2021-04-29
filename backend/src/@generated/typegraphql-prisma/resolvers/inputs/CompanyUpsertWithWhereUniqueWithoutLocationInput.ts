import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutLocationInput } from "../inputs/CompanyCreateWithoutLocationInput";
import { CompanyUpdateWithoutLocationInput } from "../inputs/CompanyUpdateWithoutLocationInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutLocationInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutLocationInput;
}
