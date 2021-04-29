import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DrumWhereInput } from "../inputs/DrumWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DrumListRelationFilter {
  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  every?: DrumWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  some?: DrumWhereInput | undefined;

  @TypeGraphQL.Field(_type => DrumWhereInput, {
    nullable: true
  })
  none?: DrumWhereInput | undefined;
}
