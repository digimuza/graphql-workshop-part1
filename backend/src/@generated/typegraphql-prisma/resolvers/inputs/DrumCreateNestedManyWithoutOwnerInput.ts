import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateOrConnectWithoutOwnerInput } from "../inputs/DrumCreateOrConnectWithoutOwnerInput";
import { DrumCreateWithoutOwnerInput } from "../inputs/DrumCreateWithoutOwnerInput";
import { DrumWhereUniqueInput } from "../inputs/DrumWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [DrumCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: DrumCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: DrumCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumWhereUniqueInput[] | undefined;
}
