import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAvgAggregate } from "../outputs/LocationAvgAggregate";
import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
import { LocationSumAggregate } from "../outputs/LocationSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class LocationGroupBy {
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
  address!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  latitude!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  longitude!: number;

  @TypeGraphQL.Field(_type => LocationCountAggregate, {
    nullable: true
  })
  count?: LocationCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationAvgAggregate, {
    nullable: true
  })
  avg?: LocationAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationSumAggregate, {
    nullable: true
  })
  sum?: LocationSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationMinAggregate, {
    nullable: true
  })
  min?: LocationMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationMaxAggregate, {
    nullable: true
  })
  max?: LocationMaxAggregate | null;
}
