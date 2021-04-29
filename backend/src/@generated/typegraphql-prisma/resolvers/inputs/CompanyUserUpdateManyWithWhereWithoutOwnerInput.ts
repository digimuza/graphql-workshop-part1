import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUserScalarWhereInput } from "../inputs/CompanyUserScalarWhereInput";
import { CompanyUserUpdateManyMutationInput } from "../inputs/CompanyUserUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUserUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CompanyUserScalarWhereInput, {
    nullable: false
  })
  where!: CompanyUserScalarWhereInput;

  @TypeGraphQL.Field(_type => CompanyUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: CompanyUserUpdateManyMutationInput;
}
