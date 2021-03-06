import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyMutationInput } from "../inputs/CompanyUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => CompanyScalarWhereInput, {
    nullable: false
  })
  where!: CompanyScalarWhereInput;

  @TypeGraphQL.Field(_type => CompanyUpdateManyMutationInput, {
    nullable: false
  })
  data!: CompanyUpdateManyMutationInput;
}
