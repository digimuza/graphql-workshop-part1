import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Drum } from "../models/Drum";
import { Location } from "../models/Location";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DrumStateHistory {
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
    nullable: false
  })
  drumId!: string;

  drum?: Drum;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  state!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  locationId!: string;

  location?: Location;
}
