import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUpdateManyWithoutLocationInput } from "../inputs/CompanyUpdateManyWithoutLocationInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DrumStateHistoryUpdateManyWithoutLocationInput } from "../inputs/DrumStateHistoryUpdateManyWithoutLocationInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutLocationsInput } from "../inputs/UserUpdateOneWithoutLocationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LocationUpdateInput {
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
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  latitude?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  longitude?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutLocationsInput, {
    nullable: true
  })
  owner?: UserUpdateOneWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateManyWithoutLocationInput, {
    nullable: true
  })
  companies?: CompanyUpdateManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateManyWithoutLocationInput, {
    nullable: true
  })
  drumStateHistory?: DrumStateHistoryUpdateManyWithoutLocationInput | undefined;
}
