import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUpdateManyWithoutOwnerInput } from "../inputs/CompanyUpdateManyWithoutOwnerInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DrumMovementHistoryUpdateManyWithoutOwnerInput } from "../inputs/DrumMovementHistoryUpdateManyWithoutOwnerInput";
import { DrumStateHistoryUpdateManyWithoutOwnerInput } from "../inputs/DrumStateHistoryUpdateManyWithoutOwnerInput";
import { DrumTypeUpdateManyWithoutOwnerInput } from "../inputs/DrumTypeUpdateManyWithoutOwnerInput";
import { DrumUpdateManyWithoutOwnerInput } from "../inputs/DrumUpdateManyWithoutOwnerInput";
import { LocationUpdateManyWithoutOwnerInput } from "../inputs/LocationUpdateManyWithoutOwnerInput";
import { MarketplaceUpdateManyWithoutOwnerInput } from "../inputs/MarketplaceUpdateManyWithoutOwnerInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutCompanyUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  fullName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  companies?: CompanyUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  locations?: LocationUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => MarketplaceUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  marketplaces?: MarketplaceUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DrumUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  drums?: DrumUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  drumTypes?: DrumTypeUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  drumStateHistoryUpdates?: DrumStateHistoryUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DrumMovementHistoryUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  drumMovementHistoryUpdates?: DrumMovementHistoryUpdateManyWithoutOwnerInput | undefined;
}
