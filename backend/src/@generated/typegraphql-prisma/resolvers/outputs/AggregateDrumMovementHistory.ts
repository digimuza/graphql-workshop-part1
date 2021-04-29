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
export class AggregateDrumMovementHistory {
  @TypeGraphQL.Field(_type => DrumMovementHistoryCountAggregate, {
    nullable: true
  })
  count!: DrumMovementHistoryCountAggregate | null;

  @TypeGraphQL.Field(_type => DrumMovementHistoryAvgAggregate, {
    nullable: true
  })
  avg!: DrumMovementHistoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => DrumMovementHistorySumAggregate, {
    nullable: true
  })
  sum!: DrumMovementHistorySumAggregate | null;

  @TypeGraphQL.Field(_type => DrumMovementHistoryMinAggregate, {
    nullable: true
  })
  min!: DrumMovementHistoryMinAggregate | null;

  @TypeGraphQL.Field(_type => DrumMovementHistoryMaxAggregate, {
    nullable: true
  })
  max!: DrumMovementHistoryMaxAggregate | null;
}
