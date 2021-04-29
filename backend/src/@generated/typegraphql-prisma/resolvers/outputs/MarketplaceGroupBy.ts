import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceAvgAggregate } from "../outputs/MarketplaceAvgAggregate";
import { MarketplaceCountAggregate } from "../outputs/MarketplaceCountAggregate";
import { MarketplaceMaxAggregate } from "../outputs/MarketplaceMaxAggregate";
import { MarketplaceMinAggregate } from "../outputs/MarketplaceMinAggregate";
import { MarketplaceSumAggregate } from "../outputs/MarketplaceSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MarketplaceGroupBy {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCurrent?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isLast?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  companyId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  drumId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gracePeriodInDays?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimumRentPeriodInMonths?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  reservationPeriodInDays?: number | null;

  @TypeGraphQL.Field(_type => MarketplaceCountAggregate, {
    nullable: true
  })
  count?: MarketplaceCountAggregate | null;

  @TypeGraphQL.Field(_type => MarketplaceAvgAggregate, {
    nullable: true
  })
  avg?: MarketplaceAvgAggregate | null;

  @TypeGraphQL.Field(_type => MarketplaceSumAggregate, {
    nullable: true
  })
  sum?: MarketplaceSumAggregate | null;

  @TypeGraphQL.Field(_type => MarketplaceMinAggregate, {
    nullable: true
  })
  min?: MarketplaceMinAggregate | null;

  @TypeGraphQL.Field(_type => MarketplaceMaxAggregate, {
    nullable: true
  })
  max?: MarketplaceMaxAggregate | null;
}
