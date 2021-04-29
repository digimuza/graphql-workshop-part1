import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumStateHistoryCountAggregate } from "../outputs/DrumStateHistoryCountAggregate";
import { DrumStateHistoryMaxAggregate } from "../outputs/DrumStateHistoryMaxAggregate";
import { DrumStateHistoryMinAggregate } from "../outputs/DrumStateHistoryMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDrumStateHistory {
  @TypeGraphQL.Field(_type => DrumStateHistoryCountAggregate, {
    nullable: true
  })
  count!: DrumStateHistoryCountAggregate | null;

  @TypeGraphQL.Field(_type => DrumStateHistoryMinAggregate, {
    nullable: true
  })
  min!: DrumStateHistoryMinAggregate | null;

  @TypeGraphQL.Field(_type => DrumStateHistoryMaxAggregate, {
    nullable: true
  })
  max!: DrumStateHistoryMaxAggregate | null;
}
