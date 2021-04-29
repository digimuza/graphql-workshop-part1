import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryCreateOrConnectWithoutOwnerInput } from "../inputs/DrumMovementHistoryCreateOrConnectWithoutOwnerInput";
import { DrumMovementHistoryCreateWithoutOwnerInput } from "../inputs/DrumMovementHistoryCreateWithoutOwnerInput";
import { DrumMovementHistoryWhereUniqueInput } from "../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [DrumMovementHistoryCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: DrumMovementHistoryCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: DrumMovementHistoryCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumMovementHistoryWhereUniqueInput[] | undefined;
}
