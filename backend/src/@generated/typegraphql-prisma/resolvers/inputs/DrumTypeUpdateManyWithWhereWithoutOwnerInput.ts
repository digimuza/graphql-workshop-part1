import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeScalarWhereInput } from "../inputs/DrumTypeScalarWhereInput";
import { DrumTypeUpdateManyMutationInput } from "../inputs/DrumTypeUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumTypeScalarWhereInput, {
    nullable: false
  })
  where!: DrumTypeScalarWhereInput;

  @TypeGraphQL.Field(_type => DrumTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrumTypeUpdateManyMutationInput;
}
