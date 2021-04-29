import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumTypeOrderByInput } from "../../../inputs/DrumTypeOrderByInput";
import { DrumTypeWhereInput } from "../../../inputs/DrumTypeWhereInput";
import { DrumTypeWhereUniqueInput } from "../../../inputs/DrumTypeWhereUniqueInput";
import { DrumTypeScalarFieldEnum } from "../../../../enums/DrumTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDrumTypeArgs {
  @TypeGraphQL.Field(_type => DrumTypeWhereInput, {
    nullable: true
  })
  where?: DrumTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeOrderByInput], {
    nullable: true
  })
  orderBy?: DrumTypeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DrumTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: DrumTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DrumTypeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "coreDiameter" | "coreWidth" | "drivingBoreDiameter" | "drivingBoreOffset" | "emptyWeight" | "flangeDiameter" | "material" | "maximumLoadWeight" | "name" | "overallWidth" | "drumId"> | undefined;
}
