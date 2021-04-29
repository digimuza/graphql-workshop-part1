import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput } from "../inputs/DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput";
import { LocationCreateNestedOneWithoutDrumStateHistoryInput } from "../inputs/LocationCreateNestedOneWithoutDrumStateHistoryInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumStateHistoryCreateWithoutOwnerInput {
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
  state!: string;

  @TypeGraphQL.Field(_type => DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput, {
    nullable: false
  })
  drum!: DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutDrumStateHistoryInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutDrumStateHistoryInput;
}
