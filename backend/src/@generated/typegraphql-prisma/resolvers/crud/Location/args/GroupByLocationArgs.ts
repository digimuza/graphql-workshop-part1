import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationOrderByInput } from "../../../inputs/LocationOrderByInput";
import { LocationScalarWhereWithAggregatesInput } from "../../../inputs/LocationScalarWhereWithAggregatesInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";
import { LocationScalarFieldEnum } from "../../../../enums/LocationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationArgs {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationOrderByInput], {
    nullable: true
  })
  orderBy?: LocationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "ownerId" | "address" | "latitude" | "longitude">;

  @TypeGraphQL.Field(_type => LocationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
