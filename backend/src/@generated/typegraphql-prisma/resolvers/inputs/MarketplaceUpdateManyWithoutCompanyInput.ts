import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MarketplaceCreateOrConnectWithoutCompanyInput } from "../inputs/MarketplaceCreateOrConnectWithoutCompanyInput";
import { MarketplaceCreateWithoutCompanyInput } from "../inputs/MarketplaceCreateWithoutCompanyInput";
import { MarketplaceScalarWhereInput } from "../inputs/MarketplaceScalarWhereInput";
import { MarketplaceUpdateManyWithWhereWithoutCompanyInput } from "../inputs/MarketplaceUpdateManyWithWhereWithoutCompanyInput";
import { MarketplaceUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/MarketplaceUpdateWithWhereUniqueWithoutCompanyInput";
import { MarketplaceUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/MarketplaceUpsertWithWhereUniqueWithoutCompanyInput";
import { MarketplaceWhereUniqueInput } from "../inputs/MarketplaceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MarketplaceUpdateManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [MarketplaceCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: MarketplaceCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: MarketplaceCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  upsert?: MarketplaceUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [MarketplaceUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  update?: MarketplaceUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceUpdateManyWithWhereWithoutCompanyInput], {
    nullable: true
  })
  updateMany?: MarketplaceUpdateManyWithWhereWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [MarketplaceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MarketplaceScalarWhereInput[] | undefined;
}
