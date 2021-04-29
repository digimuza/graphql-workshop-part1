import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumStateHistoryOrderByInput } from "../../../inputs/DrumStateHistoryOrderByInput";
import { DrumStateHistoryWhereInput } from "../../../inputs/DrumStateHistoryWhereInput";
import { DrumStateHistoryWhereUniqueInput } from "../../../inputs/DrumStateHistoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDrumStateHistoryArgs {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereInput, {
    nullable: true
  })
  where?: DrumStateHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryOrderByInput], {
    nullable: true
  })
  orderBy?: DrumStateHistoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: DrumStateHistoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
