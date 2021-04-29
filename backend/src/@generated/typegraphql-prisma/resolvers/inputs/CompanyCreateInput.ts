import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutCompaniesInput } from "../inputs/LocationCreateNestedOneWithoutCompaniesInput";
import { MarketplaceCreateNestedManyWithoutCompanyInput } from "../inputs/MarketplaceCreateNestedManyWithoutCompanyInput";
import { UserCreateNestedOneWithoutCompaniesInput } from "../inputs/UserCreateNestedOneWithoutCompaniesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyCreateInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCompaniesInput, {
    nullable: true
  })
  owner?: UserCreateNestedOneWithoutCompaniesInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutCompaniesInput, {
    nullable: true
  })
  location?: LocationCreateNestedOneWithoutCompaniesInput | undefined;

  @TypeGraphQL.Field(_type => MarketplaceCreateNestedManyWithoutCompanyInput, {
    nullable: true
  })
  marketplace?: MarketplaceCreateNestedManyWithoutCompanyInput | undefined;
}
