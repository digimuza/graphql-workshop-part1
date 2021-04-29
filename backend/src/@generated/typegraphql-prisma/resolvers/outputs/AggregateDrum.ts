import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCountAggregate } from "../outputs/DrumCountAggregate";
import { DrumMaxAggregate } from "../outputs/DrumMaxAggregate";
import { DrumMinAggregate } from "../outputs/DrumMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDrum {
  @TypeGraphQL.Field(_type => DrumCountAggregate, {
    nullable: true
  })
  count!: DrumCountAggregate | null;

  @TypeGraphQL.Field(_type => DrumMinAggregate, {
    nullable: true
  })
  min!: DrumMinAggregate | null;

  @TypeGraphQL.Field(_type => DrumMaxAggregate, {
    nullable: true
  })
  max!: DrumMaxAggregate | null;
}
