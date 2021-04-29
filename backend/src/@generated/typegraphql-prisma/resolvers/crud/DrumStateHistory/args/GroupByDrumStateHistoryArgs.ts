import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumStateHistoryOrderByInput } from "../../../inputs/DrumStateHistoryOrderByInput";
import { DrumStateHistoryScalarWhereWithAggregatesInput } from "../../../inputs/DrumStateHistoryScalarWhereWithAggregatesInput";
import { DrumStateHistoryWhereInput } from "../../../inputs/DrumStateHistoryWhereInput";
import { DrumStateHistoryScalarFieldEnum } from "../../../../enums/DrumStateHistoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDrumStateHistoryArgs {
  @TypeGraphQL.Field(_type => DrumStateHistoryWhereInput, {
    nullable: true
  })
  where?: DrumStateHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryOrderByInput], {
    nullable: true
  })
  orderBy?: DrumStateHistoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumStateHistoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "drumId" | "state" | "locationId">;

  @TypeGraphQL.Field(_type => DrumStateHistoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DrumStateHistoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
