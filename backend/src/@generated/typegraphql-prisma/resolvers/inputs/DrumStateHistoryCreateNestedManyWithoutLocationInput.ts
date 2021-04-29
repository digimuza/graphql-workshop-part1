import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateOrConnectWithoutLocationInput } from "../inputs/DrumStateHistoryCreateOrConnectWithoutLocationInput";
import { DrumStateHistoryCreateWithoutLocationInput } from "../inputs/DrumStateHistoryCreateWithoutLocationInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateWithoutLocationInput], {
    nullable: true
  })
  create?: DrumStateHistoryCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: DrumStateHistoryCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumStateHistoryWhereUniqueInput[] | undefined;
}
