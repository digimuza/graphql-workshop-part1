import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateOrConnectWithoutDrumInput } from "../inputs/DrumStateHistoryCreateOrConnectWithoutDrumInput";
import { DrumStateHistoryCreateWithoutDrumInput } from "../inputs/DrumStateHistoryCreateWithoutDrumInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryCreateNestedManyWithoutDrumInput {
  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateWithoutDrumInput], {
    nullable: true
  })
  create?: DrumStateHistoryCreateWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateOrConnectWithoutDrumInput], {
    nullable: true
  })
  connectOrCreate?: DrumStateHistoryCreateOrConnectWithoutDrumInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumStateHistoryWhereUniqueInput[] | undefined;
}
