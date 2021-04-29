import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyUserOrderByInput } from "../../../inputs/CompanyUserOrderByInput";
import { CompanyUserWhereInput } from "../../../inputs/CompanyUserWhereInput";
import { CompanyUserWhereUniqueInput } from "../../../inputs/CompanyUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCompanyUserArgs {
  @TypeGraphQL.Field(_type => CompanyUserWhereInput, {
    nullable: true
  })
  where?: CompanyUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CompanyUserOrderByInput], {
    nullable: true
  })
  orderBy?: CompanyUserOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CompanyUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: CompanyUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
