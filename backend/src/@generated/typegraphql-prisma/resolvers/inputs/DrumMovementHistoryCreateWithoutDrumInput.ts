import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput } from "../inputs/UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumMovementHistoryCreateWithoutDrumInput {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  latitude!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  longitude!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput, {
    nullable: true
  })
  owner?: UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput | undefined;
}
