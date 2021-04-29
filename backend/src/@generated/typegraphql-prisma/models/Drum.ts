import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { DrumMovementHistory } from "../models/DrumMovementHistory";
import { DrumStateHistory } from "../models/DrumStateHistory";
import { DrumType } from "../models/DrumType";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Drum {
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

  owner?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  drumTypeId?: string | null;

  drumType?: DrumType | null;

  drumStateHistoryUpdates?: DrumStateHistory[];

  drumMovementHistoryUpdates?: DrumMovementHistory[];
}
