import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCountAggregate } from "../outputs/CompanyCountAggregate";
import { CompanyMaxAggregate } from "../outputs/CompanyMaxAggregate";
import { CompanyMinAggregate } from "../outputs/CompanyMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CompanyGroupBy {
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
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  locationId?: string | null;

  @TypeGraphQL.Field(_type => CompanyCountAggregate, {
    nullable: true
  })
  count?: CompanyCountAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMinAggregate, {
    nullable: true
  })
  min?: CompanyMinAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMaxAggregate, {
    nullable: true
  })
  max?: CompanyMaxAggregate | null;
}
