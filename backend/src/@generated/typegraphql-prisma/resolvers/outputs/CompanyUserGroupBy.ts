import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUserCountAggregate } from "../outputs/CompanyUserCountAggregate";
import { CompanyUserMaxAggregate } from "../outputs/CompanyUserMaxAggregate";
import { CompanyUserMinAggregate } from "../outputs/CompanyUserMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CompanyUserGroupBy {
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

  @TypeGraphQL.Field(_type => CompanyUserCountAggregate, {
    nullable: true
  })
  count?: CompanyUserCountAggregate | null;

  @TypeGraphQL.Field(_type => CompanyUserMinAggregate, {
    nullable: true
  })
  min?: CompanyUserMinAggregate | null;

  @TypeGraphQL.Field(_type => CompanyUserMaxAggregate, {
    nullable: true
  })
  max?: CompanyUserMaxAggregate | null;
}
