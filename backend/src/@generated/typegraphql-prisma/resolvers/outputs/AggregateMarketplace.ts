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
export class AggregateMarketplace {
  @TypeGraphQL.Field(_type => MarketplaceCountAggregate, {
    nullable: true
  })
  count!: MarketplaceCountAggregate | null;

  @TypeGraphQL.Field(_type => MarketplaceAvgAggregate, {
    nullable: true
  })
  avg!: MarketplaceAvgAggregate | null;

  @TypeGraphQL.Field(_type => MarketplaceSumAggregate, {
    nullable: true
  })
  sum!: MarketplaceSumAggregate | null;

  @TypeGraphQL.Field(_type => MarketplaceMinAggregate, {
    nullable: true
  })
  min!: MarketplaceMinAggregate | null;

  @TypeGraphQL.Field(_type => MarketplaceMaxAggregate, {
    nullable: true
  })
  max!: MarketplaceMaxAggregate | null;
}
