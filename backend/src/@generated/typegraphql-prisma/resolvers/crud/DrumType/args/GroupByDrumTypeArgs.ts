import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumTypeOrderByInput } from "../../../inputs/DrumTypeOrderByInput";
import { DrumTypeScalarWhereWithAggregatesInput } from "../../../inputs/DrumTypeScalarWhereWithAggregatesInput";
import { DrumTypeWhereInput } from "../../../inputs/DrumTypeWhereInput";
import { DrumTypeScalarFieldEnum } from "../../../../enums/DrumTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDrumTypeArgs {
  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  where?: DrumTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeOrderByInput], {
    nullable: true
  })
  orderBy?: DrumTypeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "coreDiameter" | "coreWidth" | "drivingBoreDiameter" | "drivingBoreOffset" | "emptyWeight" | "flangeDiameter" | "material" | "maximumLoadWeight" | "name" | "overallWidth" | "drumId">;

  @TypeGraphQL.Field(_type => DrumTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DrumTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
