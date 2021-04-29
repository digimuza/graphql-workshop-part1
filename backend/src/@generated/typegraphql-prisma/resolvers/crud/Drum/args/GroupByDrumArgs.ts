import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DrumOrderByInput } from "../../../inputs/DrumOrderByInput";
import { DrumScalarWhereWithAggregatesInput } from "../../../inputs/DrumScalarWhereWithAggregatesInput";
import { DrumWhereInput } from "../../../inputs/DrumWhereInput";
import { DrumScalarFieldEnum } from "../../../../enums/DrumScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDrumArgs {
  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  where?: DrumWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DrumOrderByInput], {
    nullable: true
  })
  orderBy?: DrumOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DrumScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "drumTypeId">;

  @TypeGraphQL.Field(_type => DrumScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DrumScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
