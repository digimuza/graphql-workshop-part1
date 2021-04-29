import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumMovementHistoryOrderByInput } from "../../../inputs/DrumMovementHistoryOrderByInput";
import { DrumMovementHistoryScalarWhereWithAggregatesInput } from "../../../inputs/DrumMovementHistoryScalarWhereWithAggregatesInput";
import { DrumMovementHistoryWhereInput } from "../../../inputs/DrumMovementHistoryWhereInput";
import { DrumMovementHistoryScalarFieldEnum } from "../../../../enums/DrumMovementHistoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDrumMovementHistoryArgs {
  @TypeGraphQL.Field(_type => DrumMovementHistoryWhereInput, {
    nullable: true
  })
  where?: DrumMovementHistoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryOrderByInput], {
    nullable: true
  })
  orderBy?: DrumMovementHistoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumMovementHistoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "drumId" | "latitude" | "longitude">;

  @TypeGraphQL.Field(_type => DrumMovementHistoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DrumMovementHistoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
