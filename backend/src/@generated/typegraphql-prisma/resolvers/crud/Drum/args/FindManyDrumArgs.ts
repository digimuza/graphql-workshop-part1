import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumOrderByInput } from "../../../inputs/DrumOrderByInput";
import { DrumWhereInput } from "../../../inputs/DrumWhereInput";
import { DrumWhereUniqueInput } from "../../../inputs/DrumWhereUniqueInput";
import { DrumScalarFieldEnum } from "../../../../enums/DrumScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDrumArgs {
  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  where?: DrumWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrumOrderByInput], {
    nullable: true
  })
  orderBy?: DrumOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DrumWhereUniqueInput, {
    nullable: true
  })
  cursor?: DrumWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DrumScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "drumTypeId"> | undefined;
}
