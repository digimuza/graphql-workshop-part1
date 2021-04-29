import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryCreateOrConnectWithoutDrumInput } from "../inputs/DrumMovementHistoryCreateOrConnectWithoutDrumInput";
import { DrumMovementHistoryCreateWithoutDrumInput } from "../inputs/DrumMovementHistoryCreateWithoutDrumInput";
import { DrumMovementHistoryWhereUniqueInput } from "../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryCreateNestedManyWithoutDrumInput {
  @TypeGraphQL.Field(_type => [DrumMovementHistoryCreateWithoutDrumInput], {
    nullable: true
  })
  create?: DrumMovementHistoryCreateWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryCreateOrConnectWithoutDrumInput], {
    nullable: true
  })
  connectOrCreate?: DrumMovementHistoryCreateOrConnectWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumMovementHistoryWhereUniqueInput[] | undefined;
}
