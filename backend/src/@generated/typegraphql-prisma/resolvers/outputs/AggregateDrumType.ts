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
export class AggregateDrumType {
  @TypeGraphQL.Field(_type => DrumTypeCountAggregate, {
    nullable: true
  })
  count!: DrumTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => DrumTypeAvgAggregate, {
    nullable: true
  })
  avg!: DrumTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => DrumTypeSumAggregate, {
    nullable: true
  })
  sum!: DrumTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => DrumTypeMinAggregate, {
    nullable: true
  })
  min!: DrumTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => DrumTypeMaxAggregate, {
    nullable: true
  })
  max!: DrumTypeMaxAggregate | null;
}
