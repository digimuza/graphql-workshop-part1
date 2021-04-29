import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumScalarWhereInput } from "../inputs/DrumScalarWhereInput";
import { DrumUpdateManyMutationInput } from "../inputs/DrumUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumScalarWhereInput, {
    nullable: false
  })
  where!: DrumScalarWhereInput;

  @TypeGraphQL.Field(_type => DrumUpdateManyMutationInput, {
    nullable: false
  })
  data!: DrumUpdateManyMutationInput;
}
