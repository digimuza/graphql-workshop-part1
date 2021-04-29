import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumMovementHistoryOrderByInput } from "../../../inputs/DrumMovementHistoryOrderByInput";
import { DrumMovementHistoryWhereInput } from "../../../inputs/DrumMovementHistoryWhereInput";
import { DrumMovementHistoryWhereUniqueInput } from "../../../inputs/DrumMovementHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDrumMovementHistoryArgs {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereInput, {
    nullable: true
  })
  where?: DrumMovementHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryOrderByInput], {
    nullable: true
  })
  orderBy?: DrumMovementHistoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: DrumMovementHistoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
