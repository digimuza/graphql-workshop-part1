import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumTypeAvgAggregate } from "../outputs/DrumTypeAvgAggregate";
import { DrumTypeCountAggregate } from "../outputs/DrumTypeCountAggregate";
import { DrumTypeMaxAggregate } from "../outputs/DrumTypeMaxAggregate";
import { DrumTypeMinAggregate } from "../outputs/DrumTypeMinAggregate";
import { DrumTypeSumAggregate } from "../outputs/DrumTypeSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DrumTypeGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ownerId?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  coreDiameter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  coreWidth!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  drivingBoreDiameter?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  drivingBoreOffset?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  emptyWeight!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  flangeDiameter!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  material?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  maximumLoadWeight!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  overallWidth!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  drumId!: string;

  @TypeGraphQL.Field(_type => DrumTypeCountAggregate, {
    nullable: true
  })
  count?: DrumTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => DrumTypeAvgAggregate, {
    nullable: true
  })
  avg?: DrumTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => DrumTypeSumAggregate, {
    nullable: true
  })
  sum?: DrumTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => DrumTypeMinAggregate, {
    nullable: true
  })
  min?: DrumTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => DrumTypeMaxAggregate, {
    nullable: true
  })
  max?: DrumTypeMaxAggregate | null;
}
