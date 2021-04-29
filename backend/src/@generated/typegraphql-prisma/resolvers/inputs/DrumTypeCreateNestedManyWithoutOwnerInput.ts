import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeCreateOrConnectWithoutOwnerInput } from "../inputs/DrumTypeCreateOrConnectWithoutOwnerInput";
import { DrumTypeCreateWithoutOwnerInput } from "../inputs/DrumTypeCreateWithoutOwnerInput";
import { DrumTypeWhereUniqueInput } from "../inputs/DrumTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [DrumTypeCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: DrumTypeCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: DrumTypeCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumTypeWhereUniqueInput[] | undefined;
}
