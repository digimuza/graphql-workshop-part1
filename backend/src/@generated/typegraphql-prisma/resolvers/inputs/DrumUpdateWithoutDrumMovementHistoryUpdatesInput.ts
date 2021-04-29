import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DrumStateHistoryUpdateManyWithoutDrumInput } from "../inputs/DrumStateHistoryUpdateManyWithoutDrumInput";
import { DrumTypeUpdateOneWithoutDrumInput } from "../inputs/DrumTypeUpdateOneWithoutDrumInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutDrumsInput } from "../inputs/UserUpdateOneWithoutDrumsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumUpdateWithoutDrumMovementHistoryUpdatesInput {
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

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  drumTypeId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutDrumsInput, {
    nullable: true
  })
  owner?: UserUpdateOneWithoutDrumsInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeUpdateOneWithoutDrumInput, {
    nullable: true
  })
  drumType?: DrumTypeUpdateOneWithoutDrumInput | undefined;

  @TypeGraphQL.Field(_type => DrumStateHistoryUpdateManyWithoutDrumInput, {
    nullable: true
  })
  drumStateHistoryUpdates?: DrumStateHistoryUpdateManyWithoutDrumInput | undefined;
}
