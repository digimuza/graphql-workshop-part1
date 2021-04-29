import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LocationUpdateOneWithoutCompaniesInput } from "../inputs/LocationUpdateOneWithoutCompaniesInput";
import { MarketplaceUpdateManyWithoutCompanyInput } from "../inputs/MarketplaceUpdateManyWithoutCompanyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCompaniesInput } from "../inputs/UserUpdateOneWithoutCompaniesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompanyUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCompaniesInput, {
    nullable: true
  })
  owner?: UserUpdateOneWithoutCompaniesInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneWithoutCompaniesInput, {
    nullable: true
  })
  location?: LocationUpdateOneWithoutCompaniesInput | undefined;

  @TypeGraphQL.Field(_type => MarketplaceUpdateManyWithoutCompanyInput, {
    nullable: true
  })
  marketplace?: MarketplaceUpdateManyWithoutCompanyInput | undefined;
}
