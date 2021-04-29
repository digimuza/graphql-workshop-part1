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
export class DrumGroupBy {
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
    nullable: true
  })
  drumTypeId?: string | null;

  @TypeGraphQL.Field(_type => DrumCountAggregate, {
    nullable: true
  })
  count?: DrumCountAggregate | null;

  @TypeGraphQL.Field(_type => DrumMinAggregate, {
    nullable: true
  })
  min?: DrumMinAggregate | null;

  @TypeGraphQL.Field(_type => DrumMaxAggregate, {
    nullable: true
  })
  max?: DrumMaxAggregate | null;
}
