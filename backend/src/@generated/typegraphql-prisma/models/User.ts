import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Company } from "../models/Company";
import { CompanyUser } from "../models/CompanyUser";
import { Drum } from "../models/Drum";
import { DrumMovementHistory } from "../models/DrumMovementHistory";
import { DrumStateHistory } from "../models/DrumStateHistory";
import { DrumType } from "../models/DrumType";
import { Location } from "../models/Location";
import { Marketplace } from "../models/Marketplace";
import { Post } from "../models/Post";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName?: string | null;

  posts?: Post[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  companies?: Company[];

  locations?: Location[];

  marketplaces?: Marketplace[];

  drums?: Drum[];

  drumTypes?: DrumType[];

  drumStateHistoryUpdates?: DrumStateHistory[];

  drumMovementHistoryUpdates?: DrumMovementHistory[];

  companyUser?: CompanyUser[];
}
