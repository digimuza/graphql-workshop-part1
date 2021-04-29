import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceCreateOrConnectWithoutOwnerInput } from "../inputs/MarketplaceCreateOrConnectWithoutOwnerInput";
import { MarketplaceCreateWithoutOwnerInput } from "../inputs/MarketplaceCreateWithoutOwnerInput";
import { MarketplaceScalarWhereInput } from "../inputs/MarketplaceScalarWhereInput";
import { MarketplaceUpdateManyWithWhereWithoutOwnerInput } from "../inputs/MarketplaceUpdateManyWithWhereWithoutOwnerInput";
import { MarketplaceUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/MarketplaceUpdateWithWhereUniqueWithoutOwnerInput";
import { MarketplaceUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/MarketplaceUpsertWithWhereUniqueWithoutOwnerInput";
import { MarketplaceWhereUniqueInput } from "../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [MarketplaceCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: MarketplaceCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: MarketplaceCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: MarketplaceUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceWhereUniqueInput], {
    nullable: true
  })
  connect?: MarketplaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceWhereUniqueInput], {
    nullable: true
  })
  set?: MarketplaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MarketplaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceWhereUniqueInput], {
    nullable: true
  })
  delete?: MarketplaceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: MarketplaceUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: MarketplaceUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MarketplaceScalarWhereInput[] | undefined;
}
