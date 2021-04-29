import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput } from "../inputs/DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutDrumStateHistoryUpdatesInput } from "../inputs/UserUpdateOneWithoutDrumStateHistoryUpdatesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryUpdateWithoutLocationInput {
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
  state?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  owner?: UserUpdateOneWithoutDrumStateHistoryUpdatesInput | undefined;

  @TypeGraphQL.Field(_type => DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput, {
    nullable: true
  })
  drum?: DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput | undefined;
}
