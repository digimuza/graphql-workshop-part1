import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCreateOrConnectWithoutOwnerInput } from "../inputs/DrumStateHistoryCreateOrConnectWithoutOwnerInput";
import { DrumStateHistoryCreateWithoutOwnerInput } from "../inputs/DrumStateHistoryCreateWithoutOwnerInput";
import { DrumStateHistoryWhereUniqueInput } from "../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: DrumStateHistoryCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: DrumStateHistoryCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryWhereUniqueInput], {
    nullable: true
  })
  connect?: DrumStateHistoryWhereUniqueInput[] | undefined;
}
