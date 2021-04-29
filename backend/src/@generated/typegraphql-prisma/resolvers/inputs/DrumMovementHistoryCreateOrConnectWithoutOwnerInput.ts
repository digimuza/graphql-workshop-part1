import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryCreateWithoutOwnerInput } from "../inputs/DrumMovementHistoryCreateWithoutOwnerInput";
import { DrumMovementHistoryWhereUniqueInput } from "../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereUniqueInput, {
    nullable: false
  })
  where!: DrumMovementHistoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DrumMovementHistoryCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: DrumMovementHistoryCreateWithoutOwnerInput;
}
