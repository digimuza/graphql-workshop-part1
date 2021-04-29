import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumMovementHistoryCreateNestedManyWithoutDrumInput } from "../inputs/DrumMovementHistoryCreateNestedManyWithoutDrumInput";
import { DrumTypeCreateNestedOneWithoutDrumInput } from "../inputs/DrumTypeCreateNestedOneWithoutDrumInput";
import { UserCreateNestedOneWithoutDrumsInput } from "../inputs/UserCreateNestedOneWithoutDrumsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumCreateWithoutDrumStateHistoryUpdatesInput {
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
    nullable: true
  })
  drumTypeId?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDrumsInput, {
    nullable: true
  })
  owner?: UserCreateNestedOneWithoutDrumsInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeCreateNestedOneWithoutDrumInput, {
    nullable: true
  })
  drumType?: DrumTypeCreateNestedOneWithoutDrumInput | undefined;

  @TypeGraphQL.Field(_type => DrumMovementHistoryCreateNestedManyWithoutDrumInput, {
    nullable: true
  })
  drumMovementHistoryUpdates?: DrumMovementHistoryCreateNestedManyWithoutDrumInput | undefined;
}
