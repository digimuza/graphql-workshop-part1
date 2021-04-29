import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateNestedOneWithoutMarketplaceInput } from "../inputs/CompanyCreateNestedOneWithoutMarketplaceInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceCreateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCurrent?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isLast?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  drumId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gracePeriodInDays?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimumRentPeriodInMonths?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  reservationPeriodInDays?: number | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutMarketplaceInput, {
    nullable: true
  })
  company?: CompanyCreateNestedOneWithoutMarketplaceInput | undefined;
}
