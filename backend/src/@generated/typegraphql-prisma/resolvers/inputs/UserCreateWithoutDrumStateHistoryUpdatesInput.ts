import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateNestedManyWithoutOwnerInput } from "../inputs/CompanyCreateNestedManyWithoutOwnerInput";
import { CompanyUserCreateNestedManyWithoutOwnerInput } from "../inputs/CompanyUserCreateNestedManyWithoutOwnerInput";
import { DrumCreateNestedManyWithoutOwnerInput } from "../inputs/DrumCreateNestedManyWithoutOwnerInput";
import { DrumMovementHistoryCreateNestedManyWithoutOwnerInput } from "../inputs/DrumMovementHistoryCreateNestedManyWithoutOwnerInput";
import { DrumTypeCreateNestedManyWithoutOwnerInput } from "../inputs/DrumTypeCreateNestedManyWithoutOwnerInput";
import { LocationCreateNestedManyWithoutOwnerInput } from "../inputs/LocationCreateNestedManyWithoutOwnerInput";
import { MarketplaceCreateNestedManyWithoutOwnerInput } from "../inputs/MarketplaceCreateNestedManyWithoutOwnerInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutDrumStateHistoryUpdatesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  companies?: CompanyCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  locations?: LocationCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => MarketplaceCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  marketplaces?: MarketplaceCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DrumCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  drums?: DrumCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DrumTypeCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  drumTypes?: DrumTypeCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => DrumMovementHistoryCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  drumMovementHistoryUpdates?: DrumMovementHistoryCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUserCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  companyUser?: CompanyUserCreateNestedManyWithoutOwnerInput | undefined;
}
