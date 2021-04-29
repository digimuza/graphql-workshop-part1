import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Company } from "../models/Company";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Marketplace {
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

  company?: Company | null;

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
}
