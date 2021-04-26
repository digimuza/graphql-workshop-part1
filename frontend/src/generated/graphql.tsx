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
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
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
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
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

export type BoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
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

export type Mutation = {
  __typename?: 'Mutation';
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

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
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

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  authorId?: Maybe<Scalars['Int']>;
  author?: Maybe<User>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  id: Scalars['Float'];
  authorId?: Maybe<Scalars['Float']>;
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
  authorId?: Maybe<Scalars['Int']>;
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
  authorId?: Maybe<Scalars['Int']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['Int']>;
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
  authorId?: Maybe<IntNullableFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  content?: Maybe<StringNullableWithAggregatesFilter>;
  published?: Maybe<BoolWithAggregatesFilter>;
  authorId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  id: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
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
  authorId?: Maybe<IntNullableFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
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
  id: Scalars['Int'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id: Scalars['Float'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id: Scalars['Int'];
  email?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

export type UserCreateWithoutPostsInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  id: Scalars['Int'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  count?: Maybe<UserCountAggregate>;
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Name = 'name'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id: Scalars['Int'];
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
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

export type UserUpdateWithoutPostsInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name'>
    )> }
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


export const GetPostDocument = gql`
    query getPost($id: Int!) {
  post(where: {id: $id}) {
    id
    title
    content
    author {
      name
    }
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
    data: {title: $title, content: "Woooooow", author: {connectOrCreate: {create: {name: "Andrius", email: $email}, where: {email: $email}}}}
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