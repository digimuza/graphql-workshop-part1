import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCompany = {
  __typename?: 'AggregateCompany';
  count?: Maybe<CompanyCountAggregate>;
  min?: Maybe<CompanyMinAggregate>;
  max?: Maybe<CompanyMaxAggregate>;
};

export type AggregateCompanyUser = {
  __typename?: 'AggregateCompanyUser';
  count?: Maybe<CompanyUserCountAggregate>;
  min?: Maybe<CompanyUserMinAggregate>;
  max?: Maybe<CompanyUserMaxAggregate>;
};

export type AggregateDrum = {
  __typename?: 'AggregateDrum';
  count?: Maybe<DrumCountAggregate>;
  min?: Maybe<DrumMinAggregate>;
  max?: Maybe<DrumMaxAggregate>;
};

export type AggregateDrumMovementHistory = {
  __typename?: 'AggregateDrumMovementHistory';
  count?: Maybe<DrumMovementHistoryCountAggregate>;
  avg?: Maybe<DrumMovementHistoryAvgAggregate>;
  sum?: Maybe<DrumMovementHistorySumAggregate>;
  min?: Maybe<DrumMovementHistoryMinAggregate>;
  max?: Maybe<DrumMovementHistoryMaxAggregate>;
};

export type AggregateDrumStateHistory = {
  __typename?: 'AggregateDrumStateHistory';
  count?: Maybe<DrumStateHistoryCountAggregate>;
  min?: Maybe<DrumStateHistoryMinAggregate>;
  max?: Maybe<DrumStateHistoryMaxAggregate>;
};

export type AggregateDrumType = {
  __typename?: 'AggregateDrumType';
  count?: Maybe<DrumTypeCountAggregate>;
  avg?: Maybe<DrumTypeAvgAggregate>;
  sum?: Maybe<DrumTypeSumAggregate>;
  min?: Maybe<DrumTypeMinAggregate>;
  max?: Maybe<DrumTypeMaxAggregate>;
};

export type AggregateLocation = {
  __typename?: 'AggregateLocation';
  count?: Maybe<LocationCountAggregate>;
  avg?: Maybe<LocationAvgAggregate>;
  sum?: Maybe<LocationSumAggregate>;
  min?: Maybe<LocationMinAggregate>;
  max?: Maybe<LocationMaxAggregate>;
};

export type AggregateMarketplace = {
  __typename?: 'AggregateMarketplace';
  count?: Maybe<MarketplaceCountAggregate>;
  avg?: Maybe<MarketplaceAvgAggregate>;
  sum?: Maybe<MarketplaceSumAggregate>;
  min?: Maybe<MarketplaceMinAggregate>;
  max?: Maybe<MarketplaceMaxAggregate>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  count?: Maybe<PostCountAggregate>;
  avg?: Maybe<PostAvgAggregate>;
  sum?: Maybe<PostSumAggregate>;
  min?: Maybe<PostMinAggregate>;
  max?: Maybe<PostMaxAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<UserCountAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedBoolNullableFilter>;
  max?: Maybe<NestedBoolNullableFilter>;
};

export type BoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  locationId?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  location?: Maybe<Location>;
  marketplace: Array<Marketplace>;
};


export type CompanyMarketplaceArgs = {
  where?: Maybe<MarketplaceWhereInput>;
  orderBy?: Maybe<Array<MarketplaceOrderByInput>>;
  cursor?: Maybe<MarketplaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<MarketplaceScalarFieldEnum>>;
};

export type CompanyCountAggregate = {
  __typename?: 'CompanyCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type CompanyCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutCompaniesInput>;
  location?: Maybe<LocationCreateNestedOneWithoutCompaniesInput>;
  marketplace?: Maybe<MarketplaceCreateNestedManyWithoutCompanyInput>;
};

export type CompanyCreateNestedManyWithoutLocationInput = {
  create?: Maybe<Array<CompanyCreateWithoutLocationInput>>;
  connectOrCreate?: Maybe<Array<CompanyCreateOrConnectWithoutLocationInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type CompanyCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<CompanyCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<CompanyCreateOrConnectWithoutOwnerInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type CompanyCreateNestedOneWithoutMarketplaceInput = {
  create?: Maybe<CompanyCreateWithoutMarketplaceInput>;
  connectOrCreate?: Maybe<CompanyCreateOrConnectWithoutMarketplaceInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateOrConnectWithoutLocationInput = {
  where: CompanyWhereUniqueInput;
  create: CompanyCreateWithoutLocationInput;
};

export type CompanyCreateOrConnectWithoutMarketplaceInput = {
  where: CompanyWhereUniqueInput;
  create: CompanyCreateWithoutMarketplaceInput;
};

export type CompanyCreateOrConnectWithoutOwnerInput = {
  where: CompanyWhereUniqueInput;
  create: CompanyCreateWithoutOwnerInput;
};

export type CompanyCreateWithoutLocationInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutCompaniesInput>;
  marketplace?: Maybe<MarketplaceCreateNestedManyWithoutCompanyInput>;
};

export type CompanyCreateWithoutMarketplaceInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutCompaniesInput>;
  location?: Maybe<LocationCreateNestedOneWithoutCompaniesInput>;
};

export type CompanyCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  location?: Maybe<LocationCreateNestedOneWithoutCompaniesInput>;
  marketplace?: Maybe<MarketplaceCreateNestedManyWithoutCompanyInput>;
};

export type CompanyGroupBy = {
  __typename?: 'CompanyGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  locationId?: Maybe<Scalars['String']>;
  count?: Maybe<CompanyCountAggregate>;
  min?: Maybe<CompanyMinAggregate>;
  max?: Maybe<CompanyMaxAggregate>;
};

export type CompanyListRelationFilter = {
  every?: Maybe<CompanyWhereInput>;
  some?: Maybe<CompanyWhereInput>;
  none?: Maybe<CompanyWhereInput>;
};

export type CompanyMaxAggregate = {
  __typename?: 'CompanyMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
};

export type CompanyMinAggregate = {
  __typename?: 'CompanyMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
};

export type CompanyOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
};

export type CompanyRelationFilter = {
  is?: Maybe<CompanyWhereInput>;
  isNot?: Maybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId',
  Name = 'name',
  LocationId = 'locationId'
}

export type CompanyScalarWhereInput = {
  AND?: Maybe<Array<CompanyScalarWhereInput>>;
  OR?: Maybe<Array<CompanyScalarWhereInput>>;
  NOT?: Maybe<Array<CompanyScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  locationId?: Maybe<StringNullableFilter>;
};

export type CompanyScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  ownerId?: Maybe<StringNullableWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  locationId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type CompanyUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  location?: Maybe<LocationUpdateOneWithoutCompaniesInput>;
  marketplace?: Maybe<MarketplaceUpdateManyWithoutCompanyInput>;
};

export type CompanyUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CompanyUpdateManyWithWhereWithoutLocationInput = {
  where: CompanyScalarWhereInput;
  data: CompanyUpdateManyMutationInput;
};

export type CompanyUpdateManyWithWhereWithoutOwnerInput = {
  where: CompanyScalarWhereInput;
  data: CompanyUpdateManyMutationInput;
};

export type CompanyUpdateManyWithoutLocationInput = {
  create?: Maybe<Array<CompanyCreateWithoutLocationInput>>;
  connectOrCreate?: Maybe<Array<CompanyCreateOrConnectWithoutLocationInput>>;
  upsert?: Maybe<Array<CompanyUpsertWithWhereUniqueWithoutLocationInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
  update?: Maybe<Array<CompanyUpdateWithWhereUniqueWithoutLocationInput>>;
  updateMany?: Maybe<Array<CompanyUpdateManyWithWhereWithoutLocationInput>>;
  deleteMany?: Maybe<Array<CompanyScalarWhereInput>>;
};

export type CompanyUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<CompanyCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<CompanyCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<CompanyUpsertWithWhereUniqueWithoutOwnerInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
  update?: Maybe<Array<CompanyUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<CompanyUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<CompanyScalarWhereInput>>;
};

export type CompanyUpdateOneWithoutMarketplaceInput = {
  create?: Maybe<CompanyCreateWithoutMarketplaceInput>;
  connectOrCreate?: Maybe<CompanyCreateOrConnectWithoutMarketplaceInput>;
  upsert?: Maybe<CompanyUpsertWithoutMarketplaceInput>;
  connect?: Maybe<CompanyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutMarketplaceInput>;
};

export type CompanyUpdateWithWhereUniqueWithoutLocationInput = {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateWithoutLocationInput;
};

export type CompanyUpdateWithWhereUniqueWithoutOwnerInput = {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateWithoutOwnerInput;
};

export type CompanyUpdateWithoutLocationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  marketplace?: Maybe<MarketplaceUpdateManyWithoutCompanyInput>;
};

export type CompanyUpdateWithoutMarketplaceInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  location?: Maybe<LocationUpdateOneWithoutCompaniesInput>;
};

export type CompanyUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneWithoutCompaniesInput>;
  marketplace?: Maybe<MarketplaceUpdateManyWithoutCompanyInput>;
};

export type CompanyUpsertWithWhereUniqueWithoutLocationInput = {
  where: CompanyWhereUniqueInput;
  update: CompanyUpdateWithoutLocationInput;
  create: CompanyCreateWithoutLocationInput;
};

export type CompanyUpsertWithWhereUniqueWithoutOwnerInput = {
  where: CompanyWhereUniqueInput;
  update: CompanyUpdateWithoutOwnerInput;
  create: CompanyCreateWithoutOwnerInput;
};

export type CompanyUpsertWithoutMarketplaceInput = {
  update: CompanyUpdateWithoutMarketplaceInput;
  create: CompanyCreateWithoutMarketplaceInput;
};

export type CompanyUser = {
  __typename?: 'CompanyUser';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
};

export type CompanyUserCountAggregate = {
  __typename?: 'CompanyUserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type CompanyUserCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  owner?: Maybe<UserCreateNestedOneWithoutCompanyUserInput>;
};

export type CompanyUserCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<CompanyUserCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<CompanyUserCreateOrConnectWithoutOwnerInput>>;
  connect?: Maybe<Array<CompanyUserWhereUniqueInput>>;
};

export type CompanyUserCreateOrConnectWithoutOwnerInput = {
  where: CompanyUserWhereUniqueInput;
  create: CompanyUserCreateWithoutOwnerInput;
};

export type CompanyUserCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUserGroupBy = {
  __typename?: 'CompanyUserGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  count?: Maybe<CompanyUserCountAggregate>;
  min?: Maybe<CompanyUserMinAggregate>;
  max?: Maybe<CompanyUserMaxAggregate>;
};

export type CompanyUserListRelationFilter = {
  every?: Maybe<CompanyUserWhereInput>;
  some?: Maybe<CompanyUserWhereInput>;
  none?: Maybe<CompanyUserWhereInput>;
};

export type CompanyUserMaxAggregate = {
  __typename?: 'CompanyUserMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
};

export type CompanyUserMinAggregate = {
  __typename?: 'CompanyUserMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
};

export type CompanyUserOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export enum CompanyUserScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId'
}

export type CompanyUserScalarWhereInput = {
  AND?: Maybe<Array<CompanyUserScalarWhereInput>>;
  OR?: Maybe<Array<CompanyUserScalarWhereInput>>;
  NOT?: Maybe<Array<CompanyUserScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
};

export type CompanyUserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CompanyUserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CompanyUserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CompanyUserScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  ownerId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type CompanyUserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutCompanyUserInput>;
};

export type CompanyUserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUserUpdateManyWithWhereWithoutOwnerInput = {
  where: CompanyUserScalarWhereInput;
  data: CompanyUserUpdateManyMutationInput;
};

export type CompanyUserUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<CompanyUserCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<CompanyUserCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<CompanyUserUpsertWithWhereUniqueWithoutOwnerInput>>;
  connect?: Maybe<Array<CompanyUserWhereUniqueInput>>;
  set?: Maybe<Array<CompanyUserWhereUniqueInput>>;
  disconnect?: Maybe<Array<CompanyUserWhereUniqueInput>>;
  delete?: Maybe<Array<CompanyUserWhereUniqueInput>>;
  update?: Maybe<Array<CompanyUserUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<CompanyUserUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<CompanyUserScalarWhereInput>>;
};

export type CompanyUserUpdateWithWhereUniqueWithoutOwnerInput = {
  where: CompanyUserWhereUniqueInput;
  data: CompanyUserUpdateWithoutOwnerInput;
};

export type CompanyUserUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUserUpsertWithWhereUniqueWithoutOwnerInput = {
  where: CompanyUserWhereUniqueInput;
  update: CompanyUserUpdateWithoutOwnerInput;
  create: CompanyUserCreateWithoutOwnerInput;
};

export type CompanyUserWhereInput = {
  AND?: Maybe<Array<CompanyUserWhereInput>>;
  OR?: Maybe<Array<CompanyUserWhereInput>>;
  NOT?: Maybe<Array<CompanyUserWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  owner?: Maybe<UserRelationFilter>;
};

export type CompanyUserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CompanyWhereInput = {
  AND?: Maybe<Array<CompanyWhereInput>>;
  OR?: Maybe<Array<CompanyWhereInput>>;
  NOT?: Maybe<Array<CompanyWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  owner?: Maybe<UserRelationFilter>;
  name?: Maybe<StringFilter>;
  locationId?: Maybe<StringNullableFilter>;
  location?: Maybe<LocationRelationFilter>;
  marketplace?: Maybe<MarketplaceListRelationFilter>;
};

export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type Drum = {
  __typename?: 'Drum';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  drumTypeId?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  drumType?: Maybe<DrumType>;
  drumStateHistoryUpdates: Array<DrumStateHistory>;
  drumMovementHistoryUpdates: Array<DrumMovementHistory>;
};


export type DrumDrumStateHistoryUpdatesArgs = {
  where?: Maybe<DrumStateHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumStateHistoryOrderByInput>>;
  cursor?: Maybe<DrumStateHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumStateHistoryScalarFieldEnum>>;
};


export type DrumDrumMovementHistoryUpdatesArgs = {
  where?: Maybe<DrumMovementHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumMovementHistoryOrderByInput>>;
  cursor?: Maybe<DrumMovementHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumMovementHistoryScalarFieldEnum>>;
};

export type DrumCountAggregate = {
  __typename?: 'DrumCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  drumTypeId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type DrumCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  drumTypeId?: Maybe<Scalars['String']>;
  owner?: Maybe<UserCreateNestedOneWithoutDrumsInput>;
  drumType?: Maybe<DrumTypeCreateNestedOneWithoutDrumInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutDrumInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutDrumInput>;
};

export type DrumCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<DrumCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DrumCreateOrConnectWithoutOwnerInput>>;
  connect?: Maybe<Array<DrumWhereUniqueInput>>;
};

export type DrumCreateNestedOneWithoutDrumMovementHistoryUpdatesInput = {
  create?: Maybe<DrumCreateWithoutDrumMovementHistoryUpdatesInput>;
  connectOrCreate?: Maybe<DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput>;
  connect?: Maybe<DrumWhereUniqueInput>;
};

export type DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput = {
  create?: Maybe<DrumCreateWithoutDrumStateHistoryUpdatesInput>;
  connectOrCreate?: Maybe<DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput>;
  connect?: Maybe<DrumWhereUniqueInput>;
};

export type DrumCreateNestedOneWithoutDrumTypeInput = {
  create?: Maybe<DrumCreateWithoutDrumTypeInput>;
  connectOrCreate?: Maybe<DrumCreateOrConnectWithoutDrumTypeInput>;
  connect?: Maybe<DrumWhereUniqueInput>;
};

export type DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput = {
  where: DrumWhereUniqueInput;
  create: DrumCreateWithoutDrumMovementHistoryUpdatesInput;
};

export type DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput = {
  where: DrumWhereUniqueInput;
  create: DrumCreateWithoutDrumStateHistoryUpdatesInput;
};

export type DrumCreateOrConnectWithoutDrumTypeInput = {
  where: DrumWhereUniqueInput;
  create: DrumCreateWithoutDrumTypeInput;
};

export type DrumCreateOrConnectWithoutOwnerInput = {
  where: DrumWhereUniqueInput;
  create: DrumCreateWithoutOwnerInput;
};

export type DrumCreateWithoutDrumMovementHistoryUpdatesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  drumTypeId?: Maybe<Scalars['String']>;
  owner?: Maybe<UserCreateNestedOneWithoutDrumsInput>;
  drumType?: Maybe<DrumTypeCreateNestedOneWithoutDrumInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutDrumInput>;
};

export type DrumCreateWithoutDrumStateHistoryUpdatesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  drumTypeId?: Maybe<Scalars['String']>;
  owner?: Maybe<UserCreateNestedOneWithoutDrumsInput>;
  drumType?: Maybe<DrumTypeCreateNestedOneWithoutDrumInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutDrumInput>;
};

export type DrumCreateWithoutDrumTypeInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  drumTypeId?: Maybe<Scalars['String']>;
  owner?: Maybe<UserCreateNestedOneWithoutDrumsInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutDrumInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutDrumInput>;
};

export type DrumCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  drumTypeId?: Maybe<Scalars['String']>;
  drumType?: Maybe<DrumTypeCreateNestedOneWithoutDrumInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutDrumInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutDrumInput>;
};

export type DrumGroupBy = {
  __typename?: 'DrumGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  drumTypeId?: Maybe<Scalars['String']>;
  count?: Maybe<DrumCountAggregate>;
  min?: Maybe<DrumMinAggregate>;
  max?: Maybe<DrumMaxAggregate>;
};

export type DrumListRelationFilter = {
  every?: Maybe<DrumWhereInput>;
  some?: Maybe<DrumWhereInput>;
  none?: Maybe<DrumWhereInput>;
};

export type DrumMaxAggregate = {
  __typename?: 'DrumMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  drumTypeId?: Maybe<Scalars['String']>;
};

export type DrumMinAggregate = {
  __typename?: 'DrumMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  drumTypeId?: Maybe<Scalars['String']>;
};

export type DrumMovementHistory = {
  __typename?: 'DrumMovementHistory';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  drumId: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  owner?: Maybe<User>;
  drum: Drum;
};

export type DrumMovementHistoryAvgAggregate = {
  __typename?: 'DrumMovementHistoryAvgAggregate';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type DrumMovementHistoryCountAggregate = {
  __typename?: 'DrumMovementHistoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  drumId?: Maybe<Scalars['Int']>;
  latitude: Scalars['Int'];
  longitude: Scalars['Int'];
  _all: Scalars['Int'];
};

export type DrumMovementHistoryCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  owner?: Maybe<UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput>;
  drum: DrumCreateNestedOneWithoutDrumMovementHistoryUpdatesInput;
};

export type DrumMovementHistoryCreateNestedManyWithoutDrumInput = {
  create?: Maybe<Array<DrumMovementHistoryCreateWithoutDrumInput>>;
  connectOrCreate?: Maybe<Array<DrumMovementHistoryCreateOrConnectWithoutDrumInput>>;
  connect?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
};

export type DrumMovementHistoryCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<DrumMovementHistoryCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DrumMovementHistoryCreateOrConnectWithoutOwnerInput>>;
  connect?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
};

export type DrumMovementHistoryCreateOrConnectWithoutDrumInput = {
  where: DrumMovementHistoryWhereUniqueInput;
  create: DrumMovementHistoryCreateWithoutDrumInput;
};

export type DrumMovementHistoryCreateOrConnectWithoutOwnerInput = {
  where: DrumMovementHistoryWhereUniqueInput;
  create: DrumMovementHistoryCreateWithoutOwnerInput;
};

export type DrumMovementHistoryCreateWithoutDrumInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  owner?: Maybe<UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput>;
};

export type DrumMovementHistoryCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  drum: DrumCreateNestedOneWithoutDrumMovementHistoryUpdatesInput;
};

export type DrumMovementHistoryGroupBy = {
  __typename?: 'DrumMovementHistoryGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  drumId: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  count?: Maybe<DrumMovementHistoryCountAggregate>;
  avg?: Maybe<DrumMovementHistoryAvgAggregate>;
  sum?: Maybe<DrumMovementHistorySumAggregate>;
  min?: Maybe<DrumMovementHistoryMinAggregate>;
  max?: Maybe<DrumMovementHistoryMaxAggregate>;
};

export type DrumMovementHistoryListRelationFilter = {
  every?: Maybe<DrumMovementHistoryWhereInput>;
  some?: Maybe<DrumMovementHistoryWhereInput>;
  none?: Maybe<DrumMovementHistoryWhereInput>;
};

export type DrumMovementHistoryMaxAggregate = {
  __typename?: 'DrumMovementHistoryMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  drumId?: Maybe<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type DrumMovementHistoryMinAggregate = {
  __typename?: 'DrumMovementHistoryMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  drumId?: Maybe<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type DrumMovementHistoryOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  drumId?: Maybe<SortOrder>;
  latitude?: Maybe<SortOrder>;
  longitude?: Maybe<SortOrder>;
};

export enum DrumMovementHistoryScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId',
  DrumId = 'drumId',
  Latitude = 'latitude',
  Longitude = 'longitude'
}

export type DrumMovementHistoryScalarWhereInput = {
  AND?: Maybe<Array<DrumMovementHistoryScalarWhereInput>>;
  OR?: Maybe<Array<DrumMovementHistoryScalarWhereInput>>;
  NOT?: Maybe<Array<DrumMovementHistoryScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  drumId?: Maybe<StringFilter>;
  latitude?: Maybe<FloatFilter>;
  longitude?: Maybe<FloatFilter>;
};

export type DrumMovementHistoryScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<DrumMovementHistoryScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<DrumMovementHistoryScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<DrumMovementHistoryScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  ownerId?: Maybe<StringNullableWithAggregatesFilter>;
  drumId?: Maybe<StringWithAggregatesFilter>;
  latitude?: Maybe<FloatWithAggregatesFilter>;
  longitude?: Maybe<FloatWithAggregatesFilter>;
};

export type DrumMovementHistorySumAggregate = {
  __typename?: 'DrumMovementHistorySumAggregate';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type DrumMovementHistoryUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumMovementHistoryUpdatesInput>;
  drum?: Maybe<DrumUpdateOneRequiredWithoutDrumMovementHistoryUpdatesInput>;
};

export type DrumMovementHistoryUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DrumMovementHistoryUpdateManyWithWhereWithoutDrumInput = {
  where: DrumMovementHistoryScalarWhereInput;
  data: DrumMovementHistoryUpdateManyMutationInput;
};

export type DrumMovementHistoryUpdateManyWithWhereWithoutOwnerInput = {
  where: DrumMovementHistoryScalarWhereInput;
  data: DrumMovementHistoryUpdateManyMutationInput;
};

export type DrumMovementHistoryUpdateManyWithoutDrumInput = {
  create?: Maybe<Array<DrumMovementHistoryCreateWithoutDrumInput>>;
  connectOrCreate?: Maybe<Array<DrumMovementHistoryCreateOrConnectWithoutDrumInput>>;
  upsert?: Maybe<Array<DrumMovementHistoryUpsertWithWhereUniqueWithoutDrumInput>>;
  connect?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
  set?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
  delete?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
  update?: Maybe<Array<DrumMovementHistoryUpdateWithWhereUniqueWithoutDrumInput>>;
  updateMany?: Maybe<Array<DrumMovementHistoryUpdateManyWithWhereWithoutDrumInput>>;
  deleteMany?: Maybe<Array<DrumMovementHistoryScalarWhereInput>>;
};

export type DrumMovementHistoryUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<DrumMovementHistoryCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DrumMovementHistoryCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<DrumMovementHistoryUpsertWithWhereUniqueWithoutOwnerInput>>;
  connect?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
  set?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
  delete?: Maybe<Array<DrumMovementHistoryWhereUniqueInput>>;
  update?: Maybe<Array<DrumMovementHistoryUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<DrumMovementHistoryUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<DrumMovementHistoryScalarWhereInput>>;
};

export type DrumMovementHistoryUpdateWithWhereUniqueWithoutDrumInput = {
  where: DrumMovementHistoryWhereUniqueInput;
  data: DrumMovementHistoryUpdateWithoutDrumInput;
};

export type DrumMovementHistoryUpdateWithWhereUniqueWithoutOwnerInput = {
  where: DrumMovementHistoryWhereUniqueInput;
  data: DrumMovementHistoryUpdateWithoutOwnerInput;
};

export type DrumMovementHistoryUpdateWithoutDrumInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumMovementHistoryUpdatesInput>;
};

export type DrumMovementHistoryUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
  drum?: Maybe<DrumUpdateOneRequiredWithoutDrumMovementHistoryUpdatesInput>;
};

export type DrumMovementHistoryUpsertWithWhereUniqueWithoutDrumInput = {
  where: DrumMovementHistoryWhereUniqueInput;
  update: DrumMovementHistoryUpdateWithoutDrumInput;
  create: DrumMovementHistoryCreateWithoutDrumInput;
};

export type DrumMovementHistoryUpsertWithWhereUniqueWithoutOwnerInput = {
  where: DrumMovementHistoryWhereUniqueInput;
  update: DrumMovementHistoryUpdateWithoutOwnerInput;
  create: DrumMovementHistoryCreateWithoutOwnerInput;
};

export type DrumMovementHistoryWhereInput = {
  AND?: Maybe<Array<DrumMovementHistoryWhereInput>>;
  OR?: Maybe<Array<DrumMovementHistoryWhereInput>>;
  NOT?: Maybe<Array<DrumMovementHistoryWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  owner?: Maybe<UserRelationFilter>;
  drumId?: Maybe<StringFilter>;
  drum?: Maybe<DrumRelationFilter>;
  latitude?: Maybe<FloatFilter>;
  longitude?: Maybe<FloatFilter>;
};

export type DrumMovementHistoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DrumOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  drumTypeId?: Maybe<SortOrder>;
};

export type DrumRelationFilter = {
  is?: Maybe<DrumWhereInput>;
  isNot?: Maybe<DrumWhereInput>;
};

export enum DrumScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId',
  DrumTypeId = 'drumTypeId'
}

export type DrumScalarWhereInput = {
  AND?: Maybe<Array<DrumScalarWhereInput>>;
  OR?: Maybe<Array<DrumScalarWhereInput>>;
  NOT?: Maybe<Array<DrumScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  drumTypeId?: Maybe<StringNullableFilter>;
};

export type DrumScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<DrumScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<DrumScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<DrumScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  ownerId?: Maybe<StringNullableWithAggregatesFilter>;
  drumTypeId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type DrumStateHistory = {
  __typename?: 'DrumStateHistory';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  drumId: Scalars['String'];
  state: Scalars['String'];
  locationId: Scalars['String'];
  owner?: Maybe<User>;
  drum: Drum;
  location: Location;
};

export type DrumStateHistoryCountAggregate = {
  __typename?: 'DrumStateHistoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  drumId?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type DrumStateHistoryCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  state: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutDrumStateHistoryUpdatesInput>;
  drum: DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput;
  location: LocationCreateNestedOneWithoutDrumStateHistoryInput;
};

export type DrumStateHistoryCreateNestedManyWithoutDrumInput = {
  create?: Maybe<Array<DrumStateHistoryCreateWithoutDrumInput>>;
  connectOrCreate?: Maybe<Array<DrumStateHistoryCreateOrConnectWithoutDrumInput>>;
  connect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
};

export type DrumStateHistoryCreateNestedManyWithoutLocationInput = {
  create?: Maybe<Array<DrumStateHistoryCreateWithoutLocationInput>>;
  connectOrCreate?: Maybe<Array<DrumStateHistoryCreateOrConnectWithoutLocationInput>>;
  connect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
};

export type DrumStateHistoryCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<DrumStateHistoryCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DrumStateHistoryCreateOrConnectWithoutOwnerInput>>;
  connect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
};

export type DrumStateHistoryCreateOrConnectWithoutDrumInput = {
  where: DrumStateHistoryWhereUniqueInput;
  create: DrumStateHistoryCreateWithoutDrumInput;
};

export type DrumStateHistoryCreateOrConnectWithoutLocationInput = {
  where: DrumStateHistoryWhereUniqueInput;
  create: DrumStateHistoryCreateWithoutLocationInput;
};

export type DrumStateHistoryCreateOrConnectWithoutOwnerInput = {
  where: DrumStateHistoryWhereUniqueInput;
  create: DrumStateHistoryCreateWithoutOwnerInput;
};

export type DrumStateHistoryCreateWithoutDrumInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  state: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutDrumStateHistoryUpdatesInput>;
  location: LocationCreateNestedOneWithoutDrumStateHistoryInput;
};

export type DrumStateHistoryCreateWithoutLocationInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  state: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutDrumStateHistoryUpdatesInput>;
  drum: DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput;
};

export type DrumStateHistoryCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  state: Scalars['String'];
  drum: DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput;
  location: LocationCreateNestedOneWithoutDrumStateHistoryInput;
};

export type DrumStateHistoryGroupBy = {
  __typename?: 'DrumStateHistoryGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  drumId: Scalars['String'];
  state: Scalars['String'];
  locationId: Scalars['String'];
  count?: Maybe<DrumStateHistoryCountAggregate>;
  min?: Maybe<DrumStateHistoryMinAggregate>;
  max?: Maybe<DrumStateHistoryMaxAggregate>;
};

export type DrumStateHistoryListRelationFilter = {
  every?: Maybe<DrumStateHistoryWhereInput>;
  some?: Maybe<DrumStateHistoryWhereInput>;
  none?: Maybe<DrumStateHistoryWhereInput>;
};

export type DrumStateHistoryMaxAggregate = {
  __typename?: 'DrumStateHistoryMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  drumId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
};

export type DrumStateHistoryMinAggregate = {
  __typename?: 'DrumStateHistoryMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  drumId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['String']>;
};

export type DrumStateHistoryOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  drumId?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
};

export enum DrumStateHistoryScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId',
  DrumId = 'drumId',
  State = 'state',
  LocationId = 'locationId'
}

export type DrumStateHistoryScalarWhereInput = {
  AND?: Maybe<Array<DrumStateHistoryScalarWhereInput>>;
  OR?: Maybe<Array<DrumStateHistoryScalarWhereInput>>;
  NOT?: Maybe<Array<DrumStateHistoryScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  drumId?: Maybe<StringFilter>;
  state?: Maybe<StringFilter>;
  locationId?: Maybe<StringFilter>;
};

export type DrumStateHistoryScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<DrumStateHistoryScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<DrumStateHistoryScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<DrumStateHistoryScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  ownerId?: Maybe<StringNullableWithAggregatesFilter>;
  drumId?: Maybe<StringWithAggregatesFilter>;
  state?: Maybe<StringWithAggregatesFilter>;
  locationId?: Maybe<StringWithAggregatesFilter>;
};

export type DrumStateHistoryUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  state?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumStateHistoryUpdatesInput>;
  drum?: Maybe<DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutDrumStateHistoryInput>;
};

export type DrumStateHistoryUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  state?: Maybe<StringFieldUpdateOperationsInput>;
};

export type DrumStateHistoryUpdateManyWithWhereWithoutDrumInput = {
  where: DrumStateHistoryScalarWhereInput;
  data: DrumStateHistoryUpdateManyMutationInput;
};

export type DrumStateHistoryUpdateManyWithWhereWithoutLocationInput = {
  where: DrumStateHistoryScalarWhereInput;
  data: DrumStateHistoryUpdateManyMutationInput;
};

export type DrumStateHistoryUpdateManyWithWhereWithoutOwnerInput = {
  where: DrumStateHistoryScalarWhereInput;
  data: DrumStateHistoryUpdateManyMutationInput;
};

export type DrumStateHistoryUpdateManyWithoutDrumInput = {
  create?: Maybe<Array<DrumStateHistoryCreateWithoutDrumInput>>;
  connectOrCreate?: Maybe<Array<DrumStateHistoryCreateOrConnectWithoutDrumInput>>;
  upsert?: Maybe<Array<DrumStateHistoryUpsertWithWhereUniqueWithoutDrumInput>>;
  connect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  set?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  delete?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  update?: Maybe<Array<DrumStateHistoryUpdateWithWhereUniqueWithoutDrumInput>>;
  updateMany?: Maybe<Array<DrumStateHistoryUpdateManyWithWhereWithoutDrumInput>>;
  deleteMany?: Maybe<Array<DrumStateHistoryScalarWhereInput>>;
};

export type DrumStateHistoryUpdateManyWithoutLocationInput = {
  create?: Maybe<Array<DrumStateHistoryCreateWithoutLocationInput>>;
  connectOrCreate?: Maybe<Array<DrumStateHistoryCreateOrConnectWithoutLocationInput>>;
  upsert?: Maybe<Array<DrumStateHistoryUpsertWithWhereUniqueWithoutLocationInput>>;
  connect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  set?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  delete?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  update?: Maybe<Array<DrumStateHistoryUpdateWithWhereUniqueWithoutLocationInput>>;
  updateMany?: Maybe<Array<DrumStateHistoryUpdateManyWithWhereWithoutLocationInput>>;
  deleteMany?: Maybe<Array<DrumStateHistoryScalarWhereInput>>;
};

export type DrumStateHistoryUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<DrumStateHistoryCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DrumStateHistoryCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<DrumStateHistoryUpsertWithWhereUniqueWithoutOwnerInput>>;
  connect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  set?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  delete?: Maybe<Array<DrumStateHistoryWhereUniqueInput>>;
  update?: Maybe<Array<DrumStateHistoryUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<DrumStateHistoryUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<DrumStateHistoryScalarWhereInput>>;
};

export type DrumStateHistoryUpdateWithWhereUniqueWithoutDrumInput = {
  where: DrumStateHistoryWhereUniqueInput;
  data: DrumStateHistoryUpdateWithoutDrumInput;
};

export type DrumStateHistoryUpdateWithWhereUniqueWithoutLocationInput = {
  where: DrumStateHistoryWhereUniqueInput;
  data: DrumStateHistoryUpdateWithoutLocationInput;
};

export type DrumStateHistoryUpdateWithWhereUniqueWithoutOwnerInput = {
  where: DrumStateHistoryWhereUniqueInput;
  data: DrumStateHistoryUpdateWithoutOwnerInput;
};

export type DrumStateHistoryUpdateWithoutDrumInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  state?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumStateHistoryUpdatesInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutDrumStateHistoryInput>;
};

export type DrumStateHistoryUpdateWithoutLocationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  state?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumStateHistoryUpdatesInput>;
  drum?: Maybe<DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput>;
};

export type DrumStateHistoryUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  state?: Maybe<StringFieldUpdateOperationsInput>;
  drum?: Maybe<DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutDrumStateHistoryInput>;
};

export type DrumStateHistoryUpsertWithWhereUniqueWithoutDrumInput = {
  where: DrumStateHistoryWhereUniqueInput;
  update: DrumStateHistoryUpdateWithoutDrumInput;
  create: DrumStateHistoryCreateWithoutDrumInput;
};

export type DrumStateHistoryUpsertWithWhereUniqueWithoutLocationInput = {
  where: DrumStateHistoryWhereUniqueInput;
  update: DrumStateHistoryUpdateWithoutLocationInput;
  create: DrumStateHistoryCreateWithoutLocationInput;
};

export type DrumStateHistoryUpsertWithWhereUniqueWithoutOwnerInput = {
  where: DrumStateHistoryWhereUniqueInput;
  update: DrumStateHistoryUpdateWithoutOwnerInput;
  create: DrumStateHistoryCreateWithoutOwnerInput;
};

export type DrumStateHistoryWhereInput = {
  AND?: Maybe<Array<DrumStateHistoryWhereInput>>;
  OR?: Maybe<Array<DrumStateHistoryWhereInput>>;
  NOT?: Maybe<Array<DrumStateHistoryWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  owner?: Maybe<UserRelationFilter>;
  drumId?: Maybe<StringFilter>;
  drum?: Maybe<DrumRelationFilter>;
  state?: Maybe<StringFilter>;
  locationId?: Maybe<StringFilter>;
  location?: Maybe<LocationRelationFilter>;
};

export type DrumStateHistoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DrumType = {
  __typename?: 'DrumType';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  material?: Maybe<Scalars['String']>;
  maximumLoadWeight: Scalars['Float'];
  name: Scalars['String'];
  overallWidth: Scalars['Float'];
  drumId: Scalars['String'];
  owner?: Maybe<User>;
  drum: Drum;
};

export type DrumTypeAvgAggregate = {
  __typename?: 'DrumTypeAvgAggregate';
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  maximumLoadWeight: Scalars['Float'];
  overallWidth: Scalars['Float'];
};

export type DrumTypeCountAggregate = {
  __typename?: 'DrumTypeCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  coreDiameter: Scalars['Int'];
  coreWidth: Scalars['Int'];
  drivingBoreDiameter?: Maybe<Scalars['Int']>;
  drivingBoreOffset?: Maybe<Scalars['Int']>;
  emptyWeight: Scalars['Int'];
  flangeDiameter: Scalars['Int'];
  material?: Maybe<Scalars['Int']>;
  maximumLoadWeight: Scalars['Int'];
  name?: Maybe<Scalars['Int']>;
  overallWidth: Scalars['Int'];
  drumId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type DrumTypeCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  material?: Maybe<Scalars['String']>;
  maximumLoadWeight: Scalars['Float'];
  name: Scalars['String'];
  overallWidth: Scalars['Float'];
  owner?: Maybe<UserCreateNestedOneWithoutDrumTypesInput>;
  drum: DrumCreateNestedOneWithoutDrumTypeInput;
};

export type DrumTypeCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<DrumTypeCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DrumTypeCreateOrConnectWithoutOwnerInput>>;
  connect?: Maybe<Array<DrumTypeWhereUniqueInput>>;
};

export type DrumTypeCreateNestedOneWithoutDrumInput = {
  create?: Maybe<DrumTypeCreateWithoutDrumInput>;
  connectOrCreate?: Maybe<DrumTypeCreateOrConnectWithoutDrumInput>;
  connect?: Maybe<DrumTypeWhereUniqueInput>;
};

export type DrumTypeCreateOrConnectWithoutDrumInput = {
  where: DrumTypeWhereUniqueInput;
  create: DrumTypeCreateWithoutDrumInput;
};

export type DrumTypeCreateOrConnectWithoutOwnerInput = {
  where: DrumTypeWhereUniqueInput;
  create: DrumTypeCreateWithoutOwnerInput;
};

export type DrumTypeCreateWithoutDrumInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  material?: Maybe<Scalars['String']>;
  maximumLoadWeight: Scalars['Float'];
  name: Scalars['String'];
  overallWidth: Scalars['Float'];
  owner?: Maybe<UserCreateNestedOneWithoutDrumTypesInput>;
};

export type DrumTypeCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  material?: Maybe<Scalars['String']>;
  maximumLoadWeight: Scalars['Float'];
  name: Scalars['String'];
  overallWidth: Scalars['Float'];
  drum: DrumCreateNestedOneWithoutDrumTypeInput;
};

export type DrumTypeGroupBy = {
  __typename?: 'DrumTypeGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  material?: Maybe<Scalars['String']>;
  maximumLoadWeight: Scalars['Float'];
  name: Scalars['String'];
  overallWidth: Scalars['Float'];
  drumId: Scalars['String'];
  count?: Maybe<DrumTypeCountAggregate>;
  avg?: Maybe<DrumTypeAvgAggregate>;
  sum?: Maybe<DrumTypeSumAggregate>;
  min?: Maybe<DrumTypeMinAggregate>;
  max?: Maybe<DrumTypeMaxAggregate>;
};

export type DrumTypeListRelationFilter = {
  every?: Maybe<DrumTypeWhereInput>;
  some?: Maybe<DrumTypeWhereInput>;
  none?: Maybe<DrumTypeWhereInput>;
};

export type DrumTypeMaxAggregate = {
  __typename?: 'DrumTypeMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  material?: Maybe<Scalars['String']>;
  maximumLoadWeight: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  overallWidth: Scalars['Float'];
  drumId?: Maybe<Scalars['String']>;
};

export type DrumTypeMinAggregate = {
  __typename?: 'DrumTypeMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  material?: Maybe<Scalars['String']>;
  maximumLoadWeight: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  overallWidth: Scalars['Float'];
  drumId?: Maybe<Scalars['String']>;
};

export type DrumTypeOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  coreDiameter?: Maybe<SortOrder>;
  coreWidth?: Maybe<SortOrder>;
  drivingBoreDiameter?: Maybe<SortOrder>;
  drivingBoreOffset?: Maybe<SortOrder>;
  emptyWeight?: Maybe<SortOrder>;
  flangeDiameter?: Maybe<SortOrder>;
  material?: Maybe<SortOrder>;
  maximumLoadWeight?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  overallWidth?: Maybe<SortOrder>;
  drumId?: Maybe<SortOrder>;
};

export type DrumTypeRelationFilter = {
  is?: Maybe<DrumTypeWhereInput>;
  isNot?: Maybe<DrumTypeWhereInput>;
};

export enum DrumTypeScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId',
  CoreDiameter = 'coreDiameter',
  CoreWidth = 'coreWidth',
  DrivingBoreDiameter = 'drivingBoreDiameter',
  DrivingBoreOffset = 'drivingBoreOffset',
  EmptyWeight = 'emptyWeight',
  FlangeDiameter = 'flangeDiameter',
  Material = 'material',
  MaximumLoadWeight = 'maximumLoadWeight',
  Name = 'name',
  OverallWidth = 'overallWidth',
  DrumId = 'drumId'
}

export type DrumTypeScalarWhereInput = {
  AND?: Maybe<Array<DrumTypeScalarWhereInput>>;
  OR?: Maybe<Array<DrumTypeScalarWhereInput>>;
  NOT?: Maybe<Array<DrumTypeScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  coreDiameter?: Maybe<FloatFilter>;
  coreWidth?: Maybe<FloatFilter>;
  drivingBoreDiameter?: Maybe<FloatNullableFilter>;
  drivingBoreOffset?: Maybe<FloatNullableFilter>;
  emptyWeight?: Maybe<FloatFilter>;
  flangeDiameter?: Maybe<FloatFilter>;
  material?: Maybe<StringNullableFilter>;
  maximumLoadWeight?: Maybe<FloatFilter>;
  name?: Maybe<StringFilter>;
  overallWidth?: Maybe<FloatFilter>;
  drumId?: Maybe<StringFilter>;
};

export type DrumTypeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<DrumTypeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<DrumTypeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<DrumTypeScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  ownerId?: Maybe<StringNullableWithAggregatesFilter>;
  coreDiameter?: Maybe<FloatWithAggregatesFilter>;
  coreWidth?: Maybe<FloatWithAggregatesFilter>;
  drivingBoreDiameter?: Maybe<FloatNullableWithAggregatesFilter>;
  drivingBoreOffset?: Maybe<FloatNullableWithAggregatesFilter>;
  emptyWeight?: Maybe<FloatWithAggregatesFilter>;
  flangeDiameter?: Maybe<FloatWithAggregatesFilter>;
  material?: Maybe<StringNullableWithAggregatesFilter>;
  maximumLoadWeight?: Maybe<FloatWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  overallWidth?: Maybe<FloatWithAggregatesFilter>;
  drumId?: Maybe<StringWithAggregatesFilter>;
};

export type DrumTypeSumAggregate = {
  __typename?: 'DrumTypeSumAggregate';
  coreDiameter: Scalars['Float'];
  coreWidth: Scalars['Float'];
  drivingBoreDiameter?: Maybe<Scalars['Float']>;
  drivingBoreOffset?: Maybe<Scalars['Float']>;
  emptyWeight: Scalars['Float'];
  flangeDiameter: Scalars['Float'];
  maximumLoadWeight: Scalars['Float'];
  overallWidth: Scalars['Float'];
};

export type DrumTypeUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  coreDiameter?: Maybe<FloatFieldUpdateOperationsInput>;
  coreWidth?: Maybe<FloatFieldUpdateOperationsInput>;
  drivingBoreDiameter?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  drivingBoreOffset?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  emptyWeight?: Maybe<FloatFieldUpdateOperationsInput>;
  flangeDiameter?: Maybe<FloatFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  maximumLoadWeight?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  overallWidth?: Maybe<FloatFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumTypesInput>;
  drum?: Maybe<DrumUpdateOneRequiredWithoutDrumTypeInput>;
};

export type DrumTypeUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  coreDiameter?: Maybe<FloatFieldUpdateOperationsInput>;
  coreWidth?: Maybe<FloatFieldUpdateOperationsInput>;
  drivingBoreDiameter?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  drivingBoreOffset?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  emptyWeight?: Maybe<FloatFieldUpdateOperationsInput>;
  flangeDiameter?: Maybe<FloatFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  maximumLoadWeight?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  overallWidth?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type DrumTypeUpdateManyWithWhereWithoutOwnerInput = {
  where: DrumTypeScalarWhereInput;
  data: DrumTypeUpdateManyMutationInput;
};

export type DrumTypeUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<DrumTypeCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DrumTypeCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<DrumTypeUpsertWithWhereUniqueWithoutOwnerInput>>;
  connect?: Maybe<Array<DrumTypeWhereUniqueInput>>;
  set?: Maybe<Array<DrumTypeWhereUniqueInput>>;
  disconnect?: Maybe<Array<DrumTypeWhereUniqueInput>>;
  delete?: Maybe<Array<DrumTypeWhereUniqueInput>>;
  update?: Maybe<Array<DrumTypeUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<DrumTypeUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<DrumTypeScalarWhereInput>>;
};

export type DrumTypeUpdateOneWithoutDrumInput = {
  create?: Maybe<DrumTypeCreateWithoutDrumInput>;
  connectOrCreate?: Maybe<DrumTypeCreateOrConnectWithoutDrumInput>;
  upsert?: Maybe<DrumTypeUpsertWithoutDrumInput>;
  connect?: Maybe<DrumTypeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<DrumTypeUpdateWithoutDrumInput>;
};

export type DrumTypeUpdateWithWhereUniqueWithoutOwnerInput = {
  where: DrumTypeWhereUniqueInput;
  data: DrumTypeUpdateWithoutOwnerInput;
};

export type DrumTypeUpdateWithoutDrumInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  coreDiameter?: Maybe<FloatFieldUpdateOperationsInput>;
  coreWidth?: Maybe<FloatFieldUpdateOperationsInput>;
  drivingBoreDiameter?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  drivingBoreOffset?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  emptyWeight?: Maybe<FloatFieldUpdateOperationsInput>;
  flangeDiameter?: Maybe<FloatFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  maximumLoadWeight?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  overallWidth?: Maybe<FloatFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumTypesInput>;
};

export type DrumTypeUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  coreDiameter?: Maybe<FloatFieldUpdateOperationsInput>;
  coreWidth?: Maybe<FloatFieldUpdateOperationsInput>;
  drivingBoreDiameter?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  drivingBoreOffset?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  emptyWeight?: Maybe<FloatFieldUpdateOperationsInput>;
  flangeDiameter?: Maybe<FloatFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  maximumLoadWeight?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  overallWidth?: Maybe<FloatFieldUpdateOperationsInput>;
  drum?: Maybe<DrumUpdateOneRequiredWithoutDrumTypeInput>;
};

export type DrumTypeUpsertWithWhereUniqueWithoutOwnerInput = {
  where: DrumTypeWhereUniqueInput;
  update: DrumTypeUpdateWithoutOwnerInput;
  create: DrumTypeCreateWithoutOwnerInput;
};

export type DrumTypeUpsertWithoutDrumInput = {
  update: DrumTypeUpdateWithoutDrumInput;
  create: DrumTypeCreateWithoutDrumInput;
};

export type DrumTypeWhereInput = {
  AND?: Maybe<Array<DrumTypeWhereInput>>;
  OR?: Maybe<Array<DrumTypeWhereInput>>;
  NOT?: Maybe<Array<DrumTypeWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  owner?: Maybe<UserRelationFilter>;
  coreDiameter?: Maybe<FloatFilter>;
  coreWidth?: Maybe<FloatFilter>;
  drivingBoreDiameter?: Maybe<FloatNullableFilter>;
  drivingBoreOffset?: Maybe<FloatNullableFilter>;
  emptyWeight?: Maybe<FloatFilter>;
  flangeDiameter?: Maybe<FloatFilter>;
  material?: Maybe<StringNullableFilter>;
  maximumLoadWeight?: Maybe<FloatFilter>;
  name?: Maybe<StringFilter>;
  overallWidth?: Maybe<FloatFilter>;
  drumId?: Maybe<StringFilter>;
  drum?: Maybe<DrumRelationFilter>;
};

export type DrumTypeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DrumUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  drumTypeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumsInput>;
  drumType?: Maybe<DrumTypeUpdateOneWithoutDrumInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutDrumInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutDrumInput>;
};

export type DrumUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  drumTypeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type DrumUpdateManyWithWhereWithoutOwnerInput = {
  where: DrumScalarWhereInput;
  data: DrumUpdateManyMutationInput;
};

export type DrumUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<DrumCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<DrumCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<DrumUpsertWithWhereUniqueWithoutOwnerInput>>;
  connect?: Maybe<Array<DrumWhereUniqueInput>>;
  set?: Maybe<Array<DrumWhereUniqueInput>>;
  disconnect?: Maybe<Array<DrumWhereUniqueInput>>;
  delete?: Maybe<Array<DrumWhereUniqueInput>>;
  update?: Maybe<Array<DrumUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<DrumUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<DrumScalarWhereInput>>;
};

export type DrumUpdateOneRequiredWithoutDrumMovementHistoryUpdatesInput = {
  create?: Maybe<DrumCreateWithoutDrumMovementHistoryUpdatesInput>;
  connectOrCreate?: Maybe<DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput>;
  upsert?: Maybe<DrumUpsertWithoutDrumMovementHistoryUpdatesInput>;
  connect?: Maybe<DrumWhereUniqueInput>;
  update?: Maybe<DrumUpdateWithoutDrumMovementHistoryUpdatesInput>;
};

export type DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput = {
  create?: Maybe<DrumCreateWithoutDrumStateHistoryUpdatesInput>;
  connectOrCreate?: Maybe<DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput>;
  upsert?: Maybe<DrumUpsertWithoutDrumStateHistoryUpdatesInput>;
  connect?: Maybe<DrumWhereUniqueInput>;
  update?: Maybe<DrumUpdateWithoutDrumStateHistoryUpdatesInput>;
};

export type DrumUpdateOneRequiredWithoutDrumTypeInput = {
  create?: Maybe<DrumCreateWithoutDrumTypeInput>;
  connectOrCreate?: Maybe<DrumCreateOrConnectWithoutDrumTypeInput>;
  upsert?: Maybe<DrumUpsertWithoutDrumTypeInput>;
  connect?: Maybe<DrumWhereUniqueInput>;
  update?: Maybe<DrumUpdateWithoutDrumTypeInput>;
};

export type DrumUpdateWithWhereUniqueWithoutOwnerInput = {
  where: DrumWhereUniqueInput;
  data: DrumUpdateWithoutOwnerInput;
};

export type DrumUpdateWithoutDrumMovementHistoryUpdatesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  drumTypeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumsInput>;
  drumType?: Maybe<DrumTypeUpdateOneWithoutDrumInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutDrumInput>;
};

export type DrumUpdateWithoutDrumStateHistoryUpdatesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  drumTypeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumsInput>;
  drumType?: Maybe<DrumTypeUpdateOneWithoutDrumInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutDrumInput>;
};

export type DrumUpdateWithoutDrumTypeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  drumTypeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutDrumsInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutDrumInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutDrumInput>;
};

export type DrumUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  drumTypeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  drumType?: Maybe<DrumTypeUpdateOneWithoutDrumInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutDrumInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutDrumInput>;
};

export type DrumUpsertWithWhereUniqueWithoutOwnerInput = {
  where: DrumWhereUniqueInput;
  update: DrumUpdateWithoutOwnerInput;
  create: DrumCreateWithoutOwnerInput;
};

export type DrumUpsertWithoutDrumMovementHistoryUpdatesInput = {
  update: DrumUpdateWithoutDrumMovementHistoryUpdatesInput;
  create: DrumCreateWithoutDrumMovementHistoryUpdatesInput;
};

export type DrumUpsertWithoutDrumStateHistoryUpdatesInput = {
  update: DrumUpdateWithoutDrumStateHistoryUpdatesInput;
  create: DrumCreateWithoutDrumStateHistoryUpdatesInput;
};

export type DrumUpsertWithoutDrumTypeInput = {
  update: DrumUpdateWithoutDrumTypeInput;
  create: DrumCreateWithoutDrumTypeInput;
};

export type DrumWhereInput = {
  AND?: Maybe<Array<DrumWhereInput>>;
  OR?: Maybe<Array<DrumWhereInput>>;
  NOT?: Maybe<Array<DrumWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  owner?: Maybe<UserRelationFilter>;
  drumTypeId?: Maybe<StringNullableFilter>;
  drumType?: Maybe<DrumTypeRelationFilter>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryListRelationFilter>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryListRelationFilter>;
};

export type DrumWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type FloatNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  sum?: Maybe<NestedFloatNullableFilter>;
  min?: Maybe<NestedFloatNullableFilter>;
  max?: Maybe<NestedFloatNullableFilter>;
};

export type FloatWithAggregatesFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedFloatFilter>;
  min?: Maybe<NestedFloatFilter>;
  max?: Maybe<NestedFloatFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type IntNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  sum?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  max?: Maybe<NestedIntNullableFilter>;
};

export type IntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  max?: Maybe<NestedIntFilter>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  owner?: Maybe<User>;
  companies: Array<Company>;
  drumStateHistory: Array<DrumStateHistory>;
};


export type LocationCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput>>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CompanyScalarFieldEnum>>;
};


export type LocationDrumStateHistoryArgs = {
  where?: Maybe<DrumStateHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumStateHistoryOrderByInput>>;
  cursor?: Maybe<DrumStateHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumStateHistoryScalarFieldEnum>>;
};

export type LocationAvgAggregate = {
  __typename?: 'LocationAvgAggregate';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationCountAggregate = {
  __typename?: 'LocationCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['Int']>;
  latitude: Scalars['Int'];
  longitude: Scalars['Int'];
  _all: Scalars['Int'];
};

export type LocationCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  owner?: Maybe<UserCreateNestedOneWithoutLocationsInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutLocationInput>;
  drumStateHistory?: Maybe<DrumStateHistoryCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<LocationCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<LocationCreateOrConnectWithoutOwnerInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
};

export type LocationCreateNestedOneWithoutCompaniesInput = {
  create?: Maybe<LocationCreateWithoutCompaniesInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutCompaniesInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
};

export type LocationCreateNestedOneWithoutDrumStateHistoryInput = {
  create?: Maybe<LocationCreateWithoutDrumStateHistoryInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutDrumStateHistoryInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
};

export type LocationCreateOrConnectWithoutCompaniesInput = {
  where: LocationWhereUniqueInput;
  create: LocationCreateWithoutCompaniesInput;
};

export type LocationCreateOrConnectWithoutDrumStateHistoryInput = {
  where: LocationWhereUniqueInput;
  create: LocationCreateWithoutDrumStateHistoryInput;
};

export type LocationCreateOrConnectWithoutOwnerInput = {
  where: LocationWhereUniqueInput;
  create: LocationCreateWithoutOwnerInput;
};

export type LocationCreateWithoutCompaniesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  owner?: Maybe<UserCreateNestedOneWithoutLocationsInput>;
  drumStateHistory?: Maybe<DrumStateHistoryCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateWithoutDrumStateHistoryInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  owner?: Maybe<UserCreateNestedOneWithoutLocationsInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  address: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  companies?: Maybe<CompanyCreateNestedManyWithoutLocationInput>;
  drumStateHistory?: Maybe<DrumStateHistoryCreateNestedManyWithoutLocationInput>;
};

export type LocationGroupBy = {
  __typename?: 'LocationGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  count?: Maybe<LocationCountAggregate>;
  avg?: Maybe<LocationAvgAggregate>;
  sum?: Maybe<LocationSumAggregate>;
  min?: Maybe<LocationMinAggregate>;
  max?: Maybe<LocationMaxAggregate>;
};

export type LocationListRelationFilter = {
  every?: Maybe<LocationWhereInput>;
  some?: Maybe<LocationWhereInput>;
  none?: Maybe<LocationWhereInput>;
};

export type LocationMaxAggregate = {
  __typename?: 'LocationMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationMinAggregate = {
  __typename?: 'LocationMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  latitude?: Maybe<SortOrder>;
  longitude?: Maybe<SortOrder>;
};

export type LocationRelationFilter = {
  is?: Maybe<LocationWhereInput>;
  isNot?: Maybe<LocationWhereInput>;
};

export enum LocationScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId',
  Address = 'address',
  Latitude = 'latitude',
  Longitude = 'longitude'
}

export type LocationScalarWhereInput = {
  AND?: Maybe<Array<LocationScalarWhereInput>>;
  OR?: Maybe<Array<LocationScalarWhereInput>>;
  NOT?: Maybe<Array<LocationScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  address?: Maybe<StringFilter>;
  latitude?: Maybe<FloatFilter>;
  longitude?: Maybe<FloatFilter>;
};

export type LocationScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<LocationScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<LocationScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<LocationScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  ownerId?: Maybe<StringNullableWithAggregatesFilter>;
  address?: Maybe<StringWithAggregatesFilter>;
  latitude?: Maybe<FloatWithAggregatesFilter>;
  longitude?: Maybe<FloatWithAggregatesFilter>;
};

export type LocationSumAggregate = {
  __typename?: 'LocationSumAggregate';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutLocationsInput>;
  companies?: Maybe<CompanyUpdateManyWithoutLocationInput>;
  drumStateHistory?: Maybe<DrumStateHistoryUpdateManyWithoutLocationInput>;
};

export type LocationUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type LocationUpdateManyWithWhereWithoutOwnerInput = {
  where: LocationScalarWhereInput;
  data: LocationUpdateManyMutationInput;
};

export type LocationUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<LocationCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<LocationCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueWithoutOwnerInput>>;
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  set?: Maybe<Array<LocationWhereUniqueInput>>;
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>;
  delete?: Maybe<Array<LocationWhereUniqueInput>>;
  update?: Maybe<Array<LocationUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>;
};

export type LocationUpdateOneRequiredWithoutDrumStateHistoryInput = {
  create?: Maybe<LocationCreateWithoutDrumStateHistoryInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutDrumStateHistoryInput>;
  upsert?: Maybe<LocationUpsertWithoutDrumStateHistoryInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
  update?: Maybe<LocationUpdateWithoutDrumStateHistoryInput>;
};

export type LocationUpdateOneWithoutCompaniesInput = {
  create?: Maybe<LocationCreateWithoutCompaniesInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutCompaniesInput>;
  upsert?: Maybe<LocationUpsertWithoutCompaniesInput>;
  connect?: Maybe<LocationWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<LocationUpdateWithoutCompaniesInput>;
};

export type LocationUpdateWithWhereUniqueWithoutOwnerInput = {
  where: LocationWhereUniqueInput;
  data: LocationUpdateWithoutOwnerInput;
};

export type LocationUpdateWithoutCompaniesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutLocationsInput>;
  drumStateHistory?: Maybe<DrumStateHistoryUpdateManyWithoutLocationInput>;
};

export type LocationUpdateWithoutDrumStateHistoryInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutLocationsInput>;
  companies?: Maybe<CompanyUpdateManyWithoutLocationInput>;
};

export type LocationUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  latitude?: Maybe<FloatFieldUpdateOperationsInput>;
  longitude?: Maybe<FloatFieldUpdateOperationsInput>;
  companies?: Maybe<CompanyUpdateManyWithoutLocationInput>;
  drumStateHistory?: Maybe<DrumStateHistoryUpdateManyWithoutLocationInput>;
};

export type LocationUpsertWithWhereUniqueWithoutOwnerInput = {
  where: LocationWhereUniqueInput;
  update: LocationUpdateWithoutOwnerInput;
  create: LocationCreateWithoutOwnerInput;
};

export type LocationUpsertWithoutCompaniesInput = {
  update: LocationUpdateWithoutCompaniesInput;
  create: LocationCreateWithoutCompaniesInput;
};

export type LocationUpsertWithoutDrumStateHistoryInput = {
  update: LocationUpdateWithoutDrumStateHistoryInput;
  create: LocationCreateWithoutDrumStateHistoryInput;
};

export type LocationWhereInput = {
  AND?: Maybe<Array<LocationWhereInput>>;
  OR?: Maybe<Array<LocationWhereInput>>;
  NOT?: Maybe<Array<LocationWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  owner?: Maybe<UserRelationFilter>;
  address?: Maybe<StringFilter>;
  latitude?: Maybe<FloatFilter>;
  longitude?: Maybe<FloatFilter>;
  companies?: Maybe<CompanyListRelationFilter>;
  drumStateHistory?: Maybe<DrumStateHistoryListRelationFilter>;
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Marketplace = {
  __typename?: 'Marketplace';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isLast?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  drumId: Scalars['String'];
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
  owner?: Maybe<User>;
  company?: Maybe<Company>;
};

export type MarketplaceAvgAggregate = {
  __typename?: 'MarketplaceAvgAggregate';
  gracePeriodInDays?: Maybe<Scalars['Float']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Float']>;
  reservationPeriodInDays?: Maybe<Scalars['Float']>;
};

export type MarketplaceCountAggregate = {
  __typename?: 'MarketplaceCountAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  isCurrent?: Maybe<Scalars['Int']>;
  isLast?: Maybe<Scalars['Int']>;
  companyId?: Maybe<Scalars['Int']>;
  drumId?: Maybe<Scalars['Int']>;
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type MarketplaceCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isLast?: Maybe<Scalars['Boolean']>;
  drumId: Scalars['String'];
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
  owner?: Maybe<UserCreateNestedOneWithoutMarketplacesInput>;
  company?: Maybe<CompanyCreateNestedOneWithoutMarketplaceInput>;
};

export type MarketplaceCreateNestedManyWithoutCompanyInput = {
  create?: Maybe<Array<MarketplaceCreateWithoutCompanyInput>>;
  connectOrCreate?: Maybe<Array<MarketplaceCreateOrConnectWithoutCompanyInput>>;
  connect?: Maybe<Array<MarketplaceWhereUniqueInput>>;
};

export type MarketplaceCreateNestedManyWithoutOwnerInput = {
  create?: Maybe<Array<MarketplaceCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<MarketplaceCreateOrConnectWithoutOwnerInput>>;
  connect?: Maybe<Array<MarketplaceWhereUniqueInput>>;
};

export type MarketplaceCreateOrConnectWithoutCompanyInput = {
  where: MarketplaceWhereUniqueInput;
  create: MarketplaceCreateWithoutCompanyInput;
};

export type MarketplaceCreateOrConnectWithoutOwnerInput = {
  where: MarketplaceWhereUniqueInput;
  create: MarketplaceCreateWithoutOwnerInput;
};

export type MarketplaceCreateWithoutCompanyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isLast?: Maybe<Scalars['Boolean']>;
  drumId: Scalars['String'];
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
  owner?: Maybe<UserCreateNestedOneWithoutMarketplacesInput>;
};

export type MarketplaceCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isLast?: Maybe<Scalars['Boolean']>;
  drumId: Scalars['String'];
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
  company?: Maybe<CompanyCreateNestedOneWithoutMarketplaceInput>;
};

export type MarketplaceGroupBy = {
  __typename?: 'MarketplaceGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['String']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isLast?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  drumId: Scalars['String'];
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
  count?: Maybe<MarketplaceCountAggregate>;
  avg?: Maybe<MarketplaceAvgAggregate>;
  sum?: Maybe<MarketplaceSumAggregate>;
  min?: Maybe<MarketplaceMinAggregate>;
  max?: Maybe<MarketplaceMaxAggregate>;
};

export type MarketplaceListRelationFilter = {
  every?: Maybe<MarketplaceWhereInput>;
  some?: Maybe<MarketplaceWhereInput>;
  none?: Maybe<MarketplaceWhereInput>;
};

export type MarketplaceMaxAggregate = {
  __typename?: 'MarketplaceMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isLast?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  drumId?: Maybe<Scalars['String']>;
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
};

export type MarketplaceMinAggregate = {
  __typename?: 'MarketplaceMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  ownerId?: Maybe<Scalars['String']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isLast?: Maybe<Scalars['Boolean']>;
  companyId?: Maybe<Scalars['String']>;
  drumId?: Maybe<Scalars['String']>;
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
};

export type MarketplaceOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  isCurrent?: Maybe<SortOrder>;
  isLast?: Maybe<SortOrder>;
  companyId?: Maybe<SortOrder>;
  drumId?: Maybe<SortOrder>;
  gracePeriodInDays?: Maybe<SortOrder>;
  minimumRentPeriodInMonths?: Maybe<SortOrder>;
  reservationPeriodInDays?: Maybe<SortOrder>;
};

export enum MarketplaceScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  OwnerId = 'ownerId',
  IsCurrent = 'isCurrent',
  IsLast = 'isLast',
  CompanyId = 'companyId',
  DrumId = 'drumId',
  GracePeriodInDays = 'gracePeriodInDays',
  MinimumRentPeriodInMonths = 'minimumRentPeriodInMonths',
  ReservationPeriodInDays = 'reservationPeriodInDays'
}

export type MarketplaceScalarWhereInput = {
  AND?: Maybe<Array<MarketplaceScalarWhereInput>>;
  OR?: Maybe<Array<MarketplaceScalarWhereInput>>;
  NOT?: Maybe<Array<MarketplaceScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  isCurrent?: Maybe<BoolNullableFilter>;
  isLast?: Maybe<BoolNullableFilter>;
  companyId?: Maybe<StringNullableFilter>;
  drumId?: Maybe<StringFilter>;
  gracePeriodInDays?: Maybe<IntNullableFilter>;
  minimumRentPeriodInMonths?: Maybe<IntNullableFilter>;
  reservationPeriodInDays?: Maybe<IntNullableFilter>;
};

export type MarketplaceScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<MarketplaceScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<MarketplaceScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<MarketplaceScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  ownerId?: Maybe<StringNullableWithAggregatesFilter>;
  isCurrent?: Maybe<BoolNullableWithAggregatesFilter>;
  isLast?: Maybe<BoolNullableWithAggregatesFilter>;
  companyId?: Maybe<StringNullableWithAggregatesFilter>;
  drumId?: Maybe<StringWithAggregatesFilter>;
  gracePeriodInDays?: Maybe<IntNullableWithAggregatesFilter>;
  minimumRentPeriodInMonths?: Maybe<IntNullableWithAggregatesFilter>;
  reservationPeriodInDays?: Maybe<IntNullableWithAggregatesFilter>;
};

export type MarketplaceSumAggregate = {
  __typename?: 'MarketplaceSumAggregate';
  gracePeriodInDays?: Maybe<Scalars['Int']>;
  minimumRentPeriodInMonths?: Maybe<Scalars['Int']>;
  reservationPeriodInDays?: Maybe<Scalars['Int']>;
};

export type MarketplaceUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isCurrent?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isLast?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  drumId?: Maybe<StringFieldUpdateOperationsInput>;
  gracePeriodInDays?: Maybe<NullableIntFieldUpdateOperationsInput>;
  minimumRentPeriodInMonths?: Maybe<NullableIntFieldUpdateOperationsInput>;
  reservationPeriodInDays?: Maybe<NullableIntFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutMarketplacesInput>;
  company?: Maybe<CompanyUpdateOneWithoutMarketplaceInput>;
};

export type MarketplaceUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isCurrent?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isLast?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  drumId?: Maybe<StringFieldUpdateOperationsInput>;
  gracePeriodInDays?: Maybe<NullableIntFieldUpdateOperationsInput>;
  minimumRentPeriodInMonths?: Maybe<NullableIntFieldUpdateOperationsInput>;
  reservationPeriodInDays?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type MarketplaceUpdateManyWithWhereWithoutCompanyInput = {
  where: MarketplaceScalarWhereInput;
  data: MarketplaceUpdateManyMutationInput;
};

export type MarketplaceUpdateManyWithWhereWithoutOwnerInput = {
  where: MarketplaceScalarWhereInput;
  data: MarketplaceUpdateManyMutationInput;
};

export type MarketplaceUpdateManyWithoutCompanyInput = {
  create?: Maybe<Array<MarketplaceCreateWithoutCompanyInput>>;
  connectOrCreate?: Maybe<Array<MarketplaceCreateOrConnectWithoutCompanyInput>>;
  upsert?: Maybe<Array<MarketplaceUpsertWithWhereUniqueWithoutCompanyInput>>;
  connect?: Maybe<Array<MarketplaceWhereUniqueInput>>;
  set?: Maybe<Array<MarketplaceWhereUniqueInput>>;
  disconnect?: Maybe<Array<MarketplaceWhereUniqueInput>>;
  delete?: Maybe<Array<MarketplaceWhereUniqueInput>>;
  update?: Maybe<Array<MarketplaceUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<MarketplaceUpdateManyWithWhereWithoutCompanyInput>>;
  deleteMany?: Maybe<Array<MarketplaceScalarWhereInput>>;
};

export type MarketplaceUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<MarketplaceCreateWithoutOwnerInput>>;
  connectOrCreate?: Maybe<Array<MarketplaceCreateOrConnectWithoutOwnerInput>>;
  upsert?: Maybe<Array<MarketplaceUpsertWithWhereUniqueWithoutOwnerInput>>;
  connect?: Maybe<Array<MarketplaceWhereUniqueInput>>;
  set?: Maybe<Array<MarketplaceWhereUniqueInput>>;
  disconnect?: Maybe<Array<MarketplaceWhereUniqueInput>>;
  delete?: Maybe<Array<MarketplaceWhereUniqueInput>>;
  update?: Maybe<Array<MarketplaceUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<MarketplaceUpdateManyWithWhereWithoutOwnerInput>>;
  deleteMany?: Maybe<Array<MarketplaceScalarWhereInput>>;
};

export type MarketplaceUpdateWithWhereUniqueWithoutCompanyInput = {
  where: MarketplaceWhereUniqueInput;
  data: MarketplaceUpdateWithoutCompanyInput;
};

export type MarketplaceUpdateWithWhereUniqueWithoutOwnerInput = {
  where: MarketplaceWhereUniqueInput;
  data: MarketplaceUpdateWithoutOwnerInput;
};

export type MarketplaceUpdateWithoutCompanyInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isCurrent?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isLast?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  drumId?: Maybe<StringFieldUpdateOperationsInput>;
  gracePeriodInDays?: Maybe<NullableIntFieldUpdateOperationsInput>;
  minimumRentPeriodInMonths?: Maybe<NullableIntFieldUpdateOperationsInput>;
  reservationPeriodInDays?: Maybe<NullableIntFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutMarketplacesInput>;
};

export type MarketplaceUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  isCurrent?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  isLast?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  drumId?: Maybe<StringFieldUpdateOperationsInput>;
  gracePeriodInDays?: Maybe<NullableIntFieldUpdateOperationsInput>;
  minimumRentPeriodInMonths?: Maybe<NullableIntFieldUpdateOperationsInput>;
  reservationPeriodInDays?: Maybe<NullableIntFieldUpdateOperationsInput>;
  company?: Maybe<CompanyUpdateOneWithoutMarketplaceInput>;
};

export type MarketplaceUpsertWithWhereUniqueWithoutCompanyInput = {
  where: MarketplaceWhereUniqueInput;
  update: MarketplaceUpdateWithoutCompanyInput;
  create: MarketplaceCreateWithoutCompanyInput;
};

export type MarketplaceUpsertWithWhereUniqueWithoutOwnerInput = {
  where: MarketplaceWhereUniqueInput;
  update: MarketplaceUpdateWithoutOwnerInput;
  create: MarketplaceCreateWithoutOwnerInput;
};

export type MarketplaceWhereInput = {
  AND?: Maybe<Array<MarketplaceWhereInput>>;
  OR?: Maybe<Array<MarketplaceWhereInput>>;
  NOT?: Maybe<Array<MarketplaceWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  ownerId?: Maybe<StringNullableFilter>;
  owner?: Maybe<UserRelationFilter>;
  isCurrent?: Maybe<BoolNullableFilter>;
  isLast?: Maybe<BoolNullableFilter>;
  companyId?: Maybe<StringNullableFilter>;
  company?: Maybe<CompanyRelationFilter>;
  drumId?: Maybe<StringFilter>;
  gracePeriodInDays?: Maybe<IntNullableFilter>;
  minimumRentPeriodInMonths?: Maybe<IntNullableFilter>;
  reservationPeriodInDays?: Maybe<IntNullableFilter>;
};

export type MarketplaceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  deleteCompany?: Maybe<Company>;
  updateCompany?: Maybe<Company>;
  deleteManyCompany: AffectedRowsOutput;
  updateManyCompany: AffectedRowsOutput;
  upsertCompany: Company;
  createCompanyUser: CompanyUser;
  deleteCompanyUser?: Maybe<CompanyUser>;
  updateCompanyUser?: Maybe<CompanyUser>;
  deleteManyCompanyUser: AffectedRowsOutput;
  updateManyCompanyUser: AffectedRowsOutput;
  upsertCompanyUser: CompanyUser;
  createDrum: Drum;
  deleteDrum?: Maybe<Drum>;
  updateDrum?: Maybe<Drum>;
  deleteManyDrum: AffectedRowsOutput;
  updateManyDrum: AffectedRowsOutput;
  upsertDrum: Drum;
  createDrumMovementHistory: DrumMovementHistory;
  deleteDrumMovementHistory?: Maybe<DrumMovementHistory>;
  updateDrumMovementHistory?: Maybe<DrumMovementHistory>;
  deleteManyDrumMovementHistory: AffectedRowsOutput;
  updateManyDrumMovementHistory: AffectedRowsOutput;
  upsertDrumMovementHistory: DrumMovementHistory;
  createDrumStateHistory: DrumStateHistory;
  deleteDrumStateHistory?: Maybe<DrumStateHistory>;
  updateDrumStateHistory?: Maybe<DrumStateHistory>;
  deleteManyDrumStateHistory: AffectedRowsOutput;
  updateManyDrumStateHistory: AffectedRowsOutput;
  upsertDrumStateHistory: DrumStateHistory;
  createDrumType: DrumType;
  deleteDrumType?: Maybe<DrumType>;
  updateDrumType?: Maybe<DrumType>;
  deleteManyDrumType: AffectedRowsOutput;
  updateManyDrumType: AffectedRowsOutput;
  upsertDrumType: DrumType;
  createLocation: Location;
  deleteLocation?: Maybe<Location>;
  updateLocation?: Maybe<Location>;
  deleteManyLocation: AffectedRowsOutput;
  updateManyLocation: AffectedRowsOutput;
  upsertLocation: Location;
  createMarketplace: Marketplace;
  deleteMarketplace?: Maybe<Marketplace>;
  updateMarketplace?: Maybe<Marketplace>;
  deleteManyMarketplace: AffectedRowsOutput;
  updateManyMarketplace: AffectedRowsOutput;
  upsertMarketplace: Marketplace;
  createPost: Post;
  deletePost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deleteManyPost: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  upsertPost: Post;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  upsertUser: User;
  myNameIs: Scalars['String'];
  mutationWithArgs: Scalars['String'];
};


export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteManyCompanyArgs = {
  where?: Maybe<CompanyWhereInput>;
};


export type MutationUpdateManyCompanyArgs = {
  data: CompanyUpdateManyMutationInput;
  where?: Maybe<CompanyWhereInput>;
};


export type MutationUpsertCompanyArgs = {
  where: CompanyWhereUniqueInput;
  create: CompanyCreateInput;
  update: CompanyUpdateInput;
};


export type MutationCreateCompanyUserArgs = {
  data: CompanyUserCreateInput;
};


export type MutationDeleteCompanyUserArgs = {
  where: CompanyUserWhereUniqueInput;
};


export type MutationUpdateCompanyUserArgs = {
  data: CompanyUserUpdateInput;
  where: CompanyUserWhereUniqueInput;
};


export type MutationDeleteManyCompanyUserArgs = {
  where?: Maybe<CompanyUserWhereInput>;
};


export type MutationUpdateManyCompanyUserArgs = {
  data: CompanyUserUpdateManyMutationInput;
  where?: Maybe<CompanyUserWhereInput>;
};


export type MutationUpsertCompanyUserArgs = {
  where: CompanyUserWhereUniqueInput;
  create: CompanyUserCreateInput;
  update: CompanyUserUpdateInput;
};


export type MutationCreateDrumArgs = {
  data: DrumCreateInput;
};


export type MutationDeleteDrumArgs = {
  where: DrumWhereUniqueInput;
};


export type MutationUpdateDrumArgs = {
  data: DrumUpdateInput;
  where: DrumWhereUniqueInput;
};


export type MutationDeleteManyDrumArgs = {
  where?: Maybe<DrumWhereInput>;
};


export type MutationUpdateManyDrumArgs = {
  data: DrumUpdateManyMutationInput;
  where?: Maybe<DrumWhereInput>;
};


export type MutationUpsertDrumArgs = {
  where: DrumWhereUniqueInput;
  create: DrumCreateInput;
  update: DrumUpdateInput;
};


export type MutationCreateDrumMovementHistoryArgs = {
  data: DrumMovementHistoryCreateInput;
};


export type MutationDeleteDrumMovementHistoryArgs = {
  where: DrumMovementHistoryWhereUniqueInput;
};


export type MutationUpdateDrumMovementHistoryArgs = {
  data: DrumMovementHistoryUpdateInput;
  where: DrumMovementHistoryWhereUniqueInput;
};


export type MutationDeleteManyDrumMovementHistoryArgs = {
  where?: Maybe<DrumMovementHistoryWhereInput>;
};


export type MutationUpdateManyDrumMovementHistoryArgs = {
  data: DrumMovementHistoryUpdateManyMutationInput;
  where?: Maybe<DrumMovementHistoryWhereInput>;
};


export type MutationUpsertDrumMovementHistoryArgs = {
  where: DrumMovementHistoryWhereUniqueInput;
  create: DrumMovementHistoryCreateInput;
  update: DrumMovementHistoryUpdateInput;
};


export type MutationCreateDrumStateHistoryArgs = {
  data: DrumStateHistoryCreateInput;
};


export type MutationDeleteDrumStateHistoryArgs = {
  where: DrumStateHistoryWhereUniqueInput;
};


export type MutationUpdateDrumStateHistoryArgs = {
  data: DrumStateHistoryUpdateInput;
  where: DrumStateHistoryWhereUniqueInput;
};


export type MutationDeleteManyDrumStateHistoryArgs = {
  where?: Maybe<DrumStateHistoryWhereInput>;
};


export type MutationUpdateManyDrumStateHistoryArgs = {
  data: DrumStateHistoryUpdateManyMutationInput;
  where?: Maybe<DrumStateHistoryWhereInput>;
};


export type MutationUpsertDrumStateHistoryArgs = {
  where: DrumStateHistoryWhereUniqueInput;
  create: DrumStateHistoryCreateInput;
  update: DrumStateHistoryUpdateInput;
};


export type MutationCreateDrumTypeArgs = {
  data: DrumTypeCreateInput;
};


export type MutationDeleteDrumTypeArgs = {
  where: DrumTypeWhereUniqueInput;
};


export type MutationUpdateDrumTypeArgs = {
  data: DrumTypeUpdateInput;
  where: DrumTypeWhereUniqueInput;
};


export type MutationDeleteManyDrumTypeArgs = {
  where?: Maybe<DrumTypeWhereInput>;
};


export type MutationUpdateManyDrumTypeArgs = {
  data: DrumTypeUpdateManyMutationInput;
  where?: Maybe<DrumTypeWhereInput>;
};


export type MutationUpsertDrumTypeArgs = {
  where: DrumTypeWhereUniqueInput;
  create: DrumTypeCreateInput;
  update: DrumTypeUpdateInput;
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationDeleteManyLocationArgs = {
  where?: Maybe<LocationWhereInput>;
};


export type MutationUpdateManyLocationArgs = {
  data: LocationUpdateManyMutationInput;
  where?: Maybe<LocationWhereInput>;
};


export type MutationUpsertLocationArgs = {
  where: LocationWhereUniqueInput;
  create: LocationCreateInput;
  update: LocationUpdateInput;
};


export type MutationCreateMarketplaceArgs = {
  data: MarketplaceCreateInput;
};


export type MutationDeleteMarketplaceArgs = {
  where: MarketplaceWhereUniqueInput;
};


export type MutationUpdateMarketplaceArgs = {
  data: MarketplaceUpdateInput;
  where: MarketplaceWhereUniqueInput;
};


export type MutationDeleteManyMarketplaceArgs = {
  where?: Maybe<MarketplaceWhereInput>;
};


export type MutationUpdateManyMarketplaceArgs = {
  data: MarketplaceUpdateManyMutationInput;
  where?: Maybe<MarketplaceWhereInput>;
};


export type MutationUpsertMarketplaceArgs = {
  where: MarketplaceWhereUniqueInput;
  create: MarketplaceCreateInput;
  update: MarketplaceUpdateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationMutationWithArgsArgs = {
  name: Scalars['String'];
};

export type Name = {
  first: Scalars['String'];
  last: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedBoolNullableFilter>;
  max?: Maybe<NestedBoolNullableFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  sum?: Maybe<NestedFloatNullableFilter>;
  min?: Maybe<NestedFloatNullableFilter>;
  max?: Maybe<NestedFloatNullableFilter>;
};

export type NestedFloatWithAggregatesFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedFloatFilter>;
  min?: Maybe<NestedFloatFilter>;
  max?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  sum?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  max?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  max?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  authorId?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  id: Scalars['Float'];
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  id: Scalars['Int'];
  title?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type PostCreateInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostCreateWithoutAuthorInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  authorId?: Maybe<Scalars['String']>;
  count?: Maybe<PostCountAggregate>;
  avg?: Maybe<PostAvgAggregate>;
  sum?: Maybe<PostSumAggregate>;
  min?: Maybe<PostMinAggregate>;
  max?: Maybe<PostMaxAggregate>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  Title = 'title',
  Content = 'content',
  Published = 'published',
  AuthorId = 'authorId'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  published?: Maybe<BoolFilter>;
  authorId?: Maybe<StringNullableFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  content?: Maybe<StringNullableWithAggregatesFilter>;
  published?: Maybe<BoolWithAggregatesFilter>;
  authorId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  id: Scalars['Int'];
};

export type PostUpdateInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
};

export type PostUpdateManyMutationInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorInput;
};

export type PostUpdateWithoutAuthorInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  published?: Maybe<BoolFilter>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringNullableFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  company?: Maybe<Company>;
  findFirstCompany?: Maybe<Company>;
  companies: Array<Company>;
  aggregateCompany: AggregateCompany;
  groupByCompany: Array<CompanyGroupBy>;
  companyUser?: Maybe<CompanyUser>;
  findFirstCompanyUser?: Maybe<CompanyUser>;
  companyUsers: Array<CompanyUser>;
  aggregateCompanyUser: AggregateCompanyUser;
  groupByCompanyUser: Array<CompanyUserGroupBy>;
  drum?: Maybe<Drum>;
  findFirstDrum?: Maybe<Drum>;
  drums: Array<Drum>;
  aggregateDrum: AggregateDrum;
  groupByDrum: Array<DrumGroupBy>;
  drumMovementHistory?: Maybe<DrumMovementHistory>;
  findFirstDrumMovementHistory?: Maybe<DrumMovementHistory>;
  drumMovementHistories: Array<DrumMovementHistory>;
  aggregateDrumMovementHistory: AggregateDrumMovementHistory;
  groupByDrumMovementHistory: Array<DrumMovementHistoryGroupBy>;
  drumStateHistory?: Maybe<DrumStateHistory>;
  findFirstDrumStateHistory?: Maybe<DrumStateHistory>;
  drumStateHistories: Array<DrumStateHistory>;
  aggregateDrumStateHistory: AggregateDrumStateHistory;
  groupByDrumStateHistory: Array<DrumStateHistoryGroupBy>;
  drumType?: Maybe<DrumType>;
  findFirstDrumType?: Maybe<DrumType>;
  drumTypes: Array<DrumType>;
  aggregateDrumType: AggregateDrumType;
  groupByDrumType: Array<DrumTypeGroupBy>;
  location?: Maybe<Location>;
  findFirstLocation?: Maybe<Location>;
  locations: Array<Location>;
  aggregateLocation: AggregateLocation;
  groupByLocation: Array<LocationGroupBy>;
  marketplace?: Maybe<Marketplace>;
  findFirstMarketplace?: Maybe<Marketplace>;
  marketplaces: Array<Marketplace>;
  aggregateMarketplace: AggregateMarketplace;
  groupByMarketplace: Array<MarketplaceGroupBy>;
  post?: Maybe<Post>;
  findFirstPost?: Maybe<Post>;
  posts: Array<Post>;
  aggregatePost: AggregatePost;
  groupByPost: Array<PostGroupBy>;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  groupByUser: Array<UserGroupBy>;
  helloWorld: Scalars['String'];
  helloWorldWithArgs: Scalars['String'];
  sampleEndpoint: ReturnObject;
  sampleEndpoint2: ReturnObject;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryFindFirstCompanyArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput>>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CompanyScalarFieldEnum>>;
};


export type QueryCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput>>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CompanyScalarFieldEnum>>;
};


export type QueryAggregateCompanyArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput>>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByCompanyArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput>>;
  by: Array<CompanyScalarFieldEnum>;
  having?: Maybe<CompanyScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCompanyUserArgs = {
  where: CompanyUserWhereUniqueInput;
};


export type QueryFindFirstCompanyUserArgs = {
  where?: Maybe<CompanyUserWhereInput>;
  orderBy?: Maybe<Array<CompanyUserOrderByInput>>;
  cursor?: Maybe<CompanyUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CompanyUserScalarFieldEnum>>;
};


export type QueryCompanyUsersArgs = {
  where?: Maybe<CompanyUserWhereInput>;
  orderBy?: Maybe<Array<CompanyUserOrderByInput>>;
  cursor?: Maybe<CompanyUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CompanyUserScalarFieldEnum>>;
};


export type QueryAggregateCompanyUserArgs = {
  where?: Maybe<CompanyUserWhereInput>;
  orderBy?: Maybe<Array<CompanyUserOrderByInput>>;
  cursor?: Maybe<CompanyUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByCompanyUserArgs = {
  where?: Maybe<CompanyUserWhereInput>;
  orderBy?: Maybe<Array<CompanyUserOrderByInput>>;
  by: Array<CompanyUserScalarFieldEnum>;
  having?: Maybe<CompanyUserScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryDrumArgs = {
  where: DrumWhereUniqueInput;
};


export type QueryFindFirstDrumArgs = {
  where?: Maybe<DrumWhereInput>;
  orderBy?: Maybe<Array<DrumOrderByInput>>;
  cursor?: Maybe<DrumWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumScalarFieldEnum>>;
};


export type QueryDrumsArgs = {
  where?: Maybe<DrumWhereInput>;
  orderBy?: Maybe<Array<DrumOrderByInput>>;
  cursor?: Maybe<DrumWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumScalarFieldEnum>>;
};


export type QueryAggregateDrumArgs = {
  where?: Maybe<DrumWhereInput>;
  orderBy?: Maybe<Array<DrumOrderByInput>>;
  cursor?: Maybe<DrumWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByDrumArgs = {
  where?: Maybe<DrumWhereInput>;
  orderBy?: Maybe<Array<DrumOrderByInput>>;
  by: Array<DrumScalarFieldEnum>;
  having?: Maybe<DrumScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryDrumMovementHistoryArgs = {
  where: DrumMovementHistoryWhereUniqueInput;
};


export type QueryFindFirstDrumMovementHistoryArgs = {
  where?: Maybe<DrumMovementHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumMovementHistoryOrderByInput>>;
  cursor?: Maybe<DrumMovementHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumMovementHistoryScalarFieldEnum>>;
};


export type QueryDrumMovementHistoriesArgs = {
  where?: Maybe<DrumMovementHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumMovementHistoryOrderByInput>>;
  cursor?: Maybe<DrumMovementHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumMovementHistoryScalarFieldEnum>>;
};


export type QueryAggregateDrumMovementHistoryArgs = {
  where?: Maybe<DrumMovementHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumMovementHistoryOrderByInput>>;
  cursor?: Maybe<DrumMovementHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByDrumMovementHistoryArgs = {
  where?: Maybe<DrumMovementHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumMovementHistoryOrderByInput>>;
  by: Array<DrumMovementHistoryScalarFieldEnum>;
  having?: Maybe<DrumMovementHistoryScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryDrumStateHistoryArgs = {
  where: DrumStateHistoryWhereUniqueInput;
};


export type QueryFindFirstDrumStateHistoryArgs = {
  where?: Maybe<DrumStateHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumStateHistoryOrderByInput>>;
  cursor?: Maybe<DrumStateHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumStateHistoryScalarFieldEnum>>;
};


export type QueryDrumStateHistoriesArgs = {
  where?: Maybe<DrumStateHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumStateHistoryOrderByInput>>;
  cursor?: Maybe<DrumStateHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumStateHistoryScalarFieldEnum>>;
};


export type QueryAggregateDrumStateHistoryArgs = {
  where?: Maybe<DrumStateHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumStateHistoryOrderByInput>>;
  cursor?: Maybe<DrumStateHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByDrumStateHistoryArgs = {
  where?: Maybe<DrumStateHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumStateHistoryOrderByInput>>;
  by: Array<DrumStateHistoryScalarFieldEnum>;
  having?: Maybe<DrumStateHistoryScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryDrumTypeArgs = {
  where: DrumTypeWhereUniqueInput;
};


export type QueryFindFirstDrumTypeArgs = {
  where?: Maybe<DrumTypeWhereInput>;
  orderBy?: Maybe<Array<DrumTypeOrderByInput>>;
  cursor?: Maybe<DrumTypeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumTypeScalarFieldEnum>>;
};


export type QueryDrumTypesArgs = {
  where?: Maybe<DrumTypeWhereInput>;
  orderBy?: Maybe<Array<DrumTypeOrderByInput>>;
  cursor?: Maybe<DrumTypeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumTypeScalarFieldEnum>>;
};


export type QueryAggregateDrumTypeArgs = {
  where?: Maybe<DrumTypeWhereInput>;
  orderBy?: Maybe<Array<DrumTypeOrderByInput>>;
  cursor?: Maybe<DrumTypeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByDrumTypeArgs = {
  where?: Maybe<DrumTypeWhereInput>;
  orderBy?: Maybe<Array<DrumTypeOrderByInput>>;
  by: Array<DrumTypeScalarFieldEnum>;
  having?: Maybe<DrumTypeScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryFindFirstLocationArgs = {
  where?: Maybe<LocationWhereInput>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  cursor?: Maybe<LocationWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<LocationScalarFieldEnum>>;
};


export type QueryLocationsArgs = {
  where?: Maybe<LocationWhereInput>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  cursor?: Maybe<LocationWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<LocationScalarFieldEnum>>;
};


export type QueryAggregateLocationArgs = {
  where?: Maybe<LocationWhereInput>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  cursor?: Maybe<LocationWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByLocationArgs = {
  where?: Maybe<LocationWhereInput>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  by: Array<LocationScalarFieldEnum>;
  having?: Maybe<LocationScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryMarketplaceArgs = {
  where: MarketplaceWhereUniqueInput;
};


export type QueryFindFirstMarketplaceArgs = {
  where?: Maybe<MarketplaceWhereInput>;
  orderBy?: Maybe<Array<MarketplaceOrderByInput>>;
  cursor?: Maybe<MarketplaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<MarketplaceScalarFieldEnum>>;
};


export type QueryMarketplacesArgs = {
  where?: Maybe<MarketplaceWhereInput>;
  orderBy?: Maybe<Array<MarketplaceOrderByInput>>;
  cursor?: Maybe<MarketplaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<MarketplaceScalarFieldEnum>>;
};


export type QueryAggregateMarketplaceArgs = {
  where?: Maybe<MarketplaceWhereInput>;
  orderBy?: Maybe<Array<MarketplaceOrderByInput>>;
  cursor?: Maybe<MarketplaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByMarketplaceArgs = {
  where?: Maybe<MarketplaceWhereInput>;
  orderBy?: Maybe<Array<MarketplaceOrderByInput>>;
  by: Array<MarketplaceScalarFieldEnum>;
  having?: Maybe<MarketplaceScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  by: Array<PostScalarFieldEnum>;
  having?: Maybe<PostScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryHelloWorldWithArgsArgs = {
  name: Scalars['String'];
};


export type QuerySampleEndpoint2Args = {
  data: Name;
};

export type ReturnObject = {
  __typename?: 'ReturnObject';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  posts: Array<Post>;
  companies: Array<Company>;
  locations: Array<Location>;
  marketplaces: Array<Marketplace>;
  drums: Array<Drum>;
  drumTypes: Array<DrumType>;
  drumStateHistoryUpdates: Array<DrumStateHistory>;
  drumMovementHistoryUpdates: Array<DrumMovementHistory>;
  companyUser: Array<CompanyUser>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type UserCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput>>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CompanyScalarFieldEnum>>;
};


export type UserLocationsArgs = {
  where?: Maybe<LocationWhereInput>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  cursor?: Maybe<LocationWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<LocationScalarFieldEnum>>;
};


export type UserMarketplacesArgs = {
  where?: Maybe<MarketplaceWhereInput>;
  orderBy?: Maybe<Array<MarketplaceOrderByInput>>;
  cursor?: Maybe<MarketplaceWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<MarketplaceScalarFieldEnum>>;
};


export type UserDrumsArgs = {
  where?: Maybe<DrumWhereInput>;
  orderBy?: Maybe<Array<DrumOrderByInput>>;
  cursor?: Maybe<DrumWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumScalarFieldEnum>>;
};


export type UserDrumTypesArgs = {
  where?: Maybe<DrumTypeWhereInput>;
  orderBy?: Maybe<Array<DrumTypeOrderByInput>>;
  cursor?: Maybe<DrumTypeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumTypeScalarFieldEnum>>;
};


export type UserDrumStateHistoryUpdatesArgs = {
  where?: Maybe<DrumStateHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumStateHistoryOrderByInput>>;
  cursor?: Maybe<DrumStateHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumStateHistoryScalarFieldEnum>>;
};


export type UserDrumMovementHistoryUpdatesArgs = {
  where?: Maybe<DrumMovementHistoryWhereInput>;
  orderBy?: Maybe<Array<DrumMovementHistoryOrderByInput>>;
  cursor?: Maybe<DrumMovementHistoryWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<DrumMovementHistoryScalarFieldEnum>>;
};


export type UserCompanyUserArgs = {
  where?: Maybe<CompanyUserWhereInput>;
  orderBy?: Maybe<Array<CompanyUserOrderByInput>>;
  cursor?: Maybe<CompanyUserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CompanyUserScalarFieldEnum>>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateNestedOneWithoutCompaniesInput = {
  create?: Maybe<UserCreateWithoutCompaniesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCompaniesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutCompanyUserInput = {
  create?: Maybe<UserCreateWithoutCompanyUserInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCompanyUserInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput = {
  create?: Maybe<UserCreateWithoutDrumMovementHistoryUpdatesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutDrumMovementHistoryUpdatesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutDrumStateHistoryUpdatesInput = {
  create?: Maybe<UserCreateWithoutDrumStateHistoryUpdatesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutDrumTypesInput = {
  create?: Maybe<UserCreateWithoutDrumTypesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutDrumTypesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutDrumsInput = {
  create?: Maybe<UserCreateWithoutDrumsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutDrumsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutLocationsInput = {
  create?: Maybe<UserCreateWithoutLocationsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLocationsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutMarketplacesInput = {
  create?: Maybe<UserCreateWithoutMarketplacesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMarketplacesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutCompaniesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCompaniesInput;
};

export type UserCreateOrConnectWithoutCompanyUserInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCompanyUserInput;
};

export type UserCreateOrConnectWithoutDrumMovementHistoryUpdatesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutDrumMovementHistoryUpdatesInput;
};

export type UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutDrumStateHistoryUpdatesInput;
};

export type UserCreateOrConnectWithoutDrumTypesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutDrumTypesInput;
};

export type UserCreateOrConnectWithoutDrumsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutDrumsInput;
};

export type UserCreateOrConnectWithoutLocationsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutLocationsInput;
};

export type UserCreateOrConnectWithoutMarketplacesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutMarketplacesInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

export type UserCreateWithoutCompaniesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutCompanyUserInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutDrumMovementHistoryUpdatesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutDrumStateHistoryUpdatesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutDrumTypesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutDrumsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutLocationsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutMarketplacesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  companies?: Maybe<CompanyCreateNestedManyWithoutOwnerInput>;
  locations?: Maybe<LocationCreateNestedManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceCreateNestedManyWithoutOwnerInput>;
  drums?: Maybe<DrumCreateNestedManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeCreateNestedManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryCreateNestedManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryCreateNestedManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserCreateNestedManyWithoutOwnerInput>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  id: Scalars['String'];
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  count?: Maybe<UserCountAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fullName?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  FullName = 'fullName',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  fullName?: Maybe<StringNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneWithoutCompaniesInput = {
  create?: Maybe<UserCreateWithoutCompaniesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCompaniesInput>;
  upsert?: Maybe<UserUpsertWithoutCompaniesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCompaniesInput>;
};

export type UserUpdateOneWithoutCompanyUserInput = {
  create?: Maybe<UserCreateWithoutCompanyUserInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCompanyUserInput>;
  upsert?: Maybe<UserUpsertWithoutCompanyUserInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCompanyUserInput>;
};

export type UserUpdateOneWithoutDrumMovementHistoryUpdatesInput = {
  create?: Maybe<UserCreateWithoutDrumMovementHistoryUpdatesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutDrumMovementHistoryUpdatesInput>;
  upsert?: Maybe<UserUpsertWithoutDrumMovementHistoryUpdatesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutDrumMovementHistoryUpdatesInput>;
};

export type UserUpdateOneWithoutDrumStateHistoryUpdatesInput = {
  create?: Maybe<UserCreateWithoutDrumStateHistoryUpdatesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput>;
  upsert?: Maybe<UserUpsertWithoutDrumStateHistoryUpdatesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutDrumStateHistoryUpdatesInput>;
};

export type UserUpdateOneWithoutDrumTypesInput = {
  create?: Maybe<UserCreateWithoutDrumTypesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutDrumTypesInput>;
  upsert?: Maybe<UserUpsertWithoutDrumTypesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutDrumTypesInput>;
};

export type UserUpdateOneWithoutDrumsInput = {
  create?: Maybe<UserCreateWithoutDrumsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutDrumsInput>;
  upsert?: Maybe<UserUpsertWithoutDrumsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutDrumsInput>;
};

export type UserUpdateOneWithoutLocationsInput = {
  create?: Maybe<UserCreateWithoutLocationsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLocationsInput>;
  upsert?: Maybe<UserUpsertWithoutLocationsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutLocationsInput>;
};

export type UserUpdateOneWithoutMarketplacesInput = {
  create?: Maybe<UserCreateWithoutMarketplacesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMarketplacesInput>;
  upsert?: Maybe<UserUpsertWithoutMarketplacesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutMarketplacesInput>;
};

export type UserUpdateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
};

export type UserUpdateWithoutCompaniesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutCompanyUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutDrumMovementHistoryUpdatesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutDrumStateHistoryUpdatesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutDrumTypesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutDrumsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutLocationsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutMarketplacesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutPostsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fullName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  locations?: Maybe<LocationUpdateManyWithoutOwnerInput>;
  marketplaces?: Maybe<MarketplaceUpdateManyWithoutOwnerInput>;
  drums?: Maybe<DrumUpdateManyWithoutOwnerInput>;
  drumTypes?: Maybe<DrumTypeUpdateManyWithoutOwnerInput>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryUpdateManyWithoutOwnerInput>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryUpdateManyWithoutOwnerInput>;
  companyUser?: Maybe<CompanyUserUpdateManyWithoutOwnerInput>;
};

export type UserUpsertWithoutCompaniesInput = {
  update: UserUpdateWithoutCompaniesInput;
  create: UserCreateWithoutCompaniesInput;
};

export type UserUpsertWithoutCompanyUserInput = {
  update: UserUpdateWithoutCompanyUserInput;
  create: UserCreateWithoutCompanyUserInput;
};

export type UserUpsertWithoutDrumMovementHistoryUpdatesInput = {
  update: UserUpdateWithoutDrumMovementHistoryUpdatesInput;
  create: UserCreateWithoutDrumMovementHistoryUpdatesInput;
};

export type UserUpsertWithoutDrumStateHistoryUpdatesInput = {
  update: UserUpdateWithoutDrumStateHistoryUpdatesInput;
  create: UserCreateWithoutDrumStateHistoryUpdatesInput;
};

export type UserUpsertWithoutDrumTypesInput = {
  update: UserUpdateWithoutDrumTypesInput;
  create: UserCreateWithoutDrumTypesInput;
};

export type UserUpsertWithoutDrumsInput = {
  update: UserUpdateWithoutDrumsInput;
  create: UserCreateWithoutDrumsInput;
};

export type UserUpsertWithoutLocationsInput = {
  update: UserUpdateWithoutLocationsInput;
  create: UserCreateWithoutLocationsInput;
};

export type UserUpsertWithoutMarketplacesInput = {
  update: UserUpdateWithoutMarketplacesInput;
  create: UserCreateWithoutMarketplacesInput;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  fullName?: Maybe<StringNullableFilter>;
  posts?: Maybe<PostListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  companies?: Maybe<CompanyListRelationFilter>;
  locations?: Maybe<LocationListRelationFilter>;
  marketplaces?: Maybe<MarketplaceListRelationFilter>;
  drums?: Maybe<DrumListRelationFilter>;
  drumTypes?: Maybe<DrumTypeListRelationFilter>;
  drumStateHistoryUpdates?: Maybe<DrumStateHistoryListRelationFilter>;
  drumMovementHistoryUpdates?: Maybe<DrumMovementHistoryListRelationFilter>;
  companyUser?: Maybe<CompanyUserListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content'>
  )> }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title'>
  )> }
);

export type CreatePostMutationVariables = Exact<{
  email: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);


export const GetPostDocument = gql`
    query getPost($id: Int!) {
  post(where: {id: $id}) {
    id
    title
    content
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetPostsDocument = gql`
    query getPosts {
  posts {
    id
    title
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const CreatePostDocument = gql`
    mutation createPost($email: String!, $title: String!) {
  createPost(
    data: {title: $title, content: "Woooooow", author: {connectOrCreate: {create: {email: $email}, where: {email: $email}}}}
  ) {
    id
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      email: // value for 'email'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($email: String!) {
  createUser(data: {email: $email}) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;