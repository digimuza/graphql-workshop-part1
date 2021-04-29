import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryAvgAggregate } from "../outputs/DrumMovementHistoryAvgAggregate";
import { DrumMovementHistoryCountAggregate } from "../outputs/DrumMovementHistoryCountAggregate";
import { DrumMovementHistoryMaxAggregate } from "../outputs/DrumMovementHistoryMaxAggregate";
import { DrumMovementHistoryMinAggregate } from "../outputs/DrumMovementHistoryMinAggregate";
import { DrumMovementHistorySumAggregate } from "../outputs/DrumMovementHistorySumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DrumMovementHistoryGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  drumId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  latitude!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  longitude!: number;

  @TypeGraphQL.Field(_type => DrumMovementHistoryCountAggregate, {
    nullable: true
  })
  count?: DrumMovementHistoryCountAggregate | null;

  @TypeGraphQL.Field(_type => DrumMovementHistoryAvgAggregate, {
    nullable: true
  })
  avg?: DrumMovementHistoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => DrumMovementHistorySumAggregate, {
    nullable: true
  })
  sum?: DrumMovementHistorySumAggregate | null;

  @TypeGraphQL.Field(_type => DrumMovementHistoryMinAggregate, {
    nullable: true
  })
  min?: DrumMovementHistoryMinAggregate | null;

  @TypeGraphQL.Field(_type => DrumMovementHistoryMaxAggregate, {
    nullable: true
  })
  max?: DrumMovementHistoryMaxAggregate | null;
}
