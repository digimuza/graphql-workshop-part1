import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUserUpdateWithoutOwnerInput } from "../inputs/CompanyUserUpdateWithoutOwnerInput";
import { CompanyUserWhereUniqueInput } from "../inputs/CompanyUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUserUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CompanyUserWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUserUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: CompanyUserUpdateWithoutOwnerInput;
}
