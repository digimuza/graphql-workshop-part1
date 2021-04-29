import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumCreateNestedOneWithoutDrumTypeInput } from "../inputs/DrumCreateNestedOneWithoutDrumTypeInput";
import { UserCreateNestedOneWithoutDrumTypesInput } from "../inputs/UserCreateNestedOneWithoutDrumTypesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumTypeCreateInput {
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
  coreDiameter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  coreWidth!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  drivingBoreDiameter?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  drivingBoreOffset?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  emptyWeight!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  flangeDiameter!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  material?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  maximumLoadWeight!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  overallWidth!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDrumTypesInput, {
    nullable: true
  })
  owner?: UserCreateNestedOneWithoutDrumTypesInput | undefined;

  @TypeGraphQL.Field(_type => DrumCreateNestedOneWithoutDrumTypeInput, {
    nullable: false
  })
  drum!: DrumCreateNestedOneWithoutDrumTypeInput;
}
