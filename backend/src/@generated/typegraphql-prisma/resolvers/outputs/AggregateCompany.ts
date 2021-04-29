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
export class AggregateCompany {
  @TypeGraphQL.Field(_type => CompanyCountAggregate, {
    nullable: true
  })
  count!: CompanyCountAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMinAggregate, {
    nullable: true
  })
  min!: CompanyMinAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMaxAggregate, {
    nullable: true
  })
  max!: CompanyMaxAggregate | null;
}
