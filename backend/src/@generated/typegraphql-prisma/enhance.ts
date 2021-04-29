import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Post: crudResolvers.PostCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Company: crudResolvers.CompanyCrudResolver,
  CompanyUser: crudResolvers.CompanyUserCrudResolver,
  Location: crudResolvers.LocationCrudResolver,
  Marketplace: crudResolvers.MarketplaceCrudResolver,
  Drum: crudResolvers.DrumCrudResolver,
  DrumType: crudResolvers.DrumTypeCrudResolver,
  DrumStateHistory: crudResolvers.DrumStateHistoryCrudResolver,
  DrumMovementHistory: crudResolvers.DrumMovementHistoryCrudResolver
};
const relationResolversMap = {
  Post: relationResolvers.PostRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Company: relationResolvers.CompanyRelationsResolver,
  CompanyUser: relationResolvers.CompanyUserRelationsResolver,
  Location: relationResolvers.LocationRelationsResolver,
  Marketplace: relationResolvers.MarketplaceRelationsResolver,
  Drum: relationResolvers.DrumRelationsResolver,
  DrumType: relationResolvers.DrumTypeRelationsResolver,
  DrumStateHistory: relationResolvers.DrumStateHistoryRelationsResolver,
  DrumMovementHistory: relationResolvers.DrumMovementHistoryRelationsResolver
};
const actionResolversMap = {
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Company: {
    company: actionResolvers.FindUniqueCompanyResolver,
    findFirstCompany: actionResolvers.FindFirstCompanyResolver,
    companies: actionResolvers.FindManyCompanyResolver,
    createCompany: actionResolvers.CreateCompanyResolver,
    deleteCompany: actionResolvers.DeleteCompanyResolver,
    updateCompany: actionResolvers.UpdateCompanyResolver,
    deleteManyCompany: actionResolvers.DeleteManyCompanyResolver,
    updateManyCompany: actionResolvers.UpdateManyCompanyResolver,
    upsertCompany: actionResolvers.UpsertCompanyResolver,
    aggregateCompany: actionResolvers.AggregateCompanyResolver,
    groupByCompany: actionResolvers.GroupByCompanyResolver
  },
  CompanyUser: {
    companyUser: actionResolvers.FindUniqueCompanyUserResolver,
    findFirstCompanyUser: actionResolvers.FindFirstCompanyUserResolver,
    companyUsers: actionResolvers.FindManyCompanyUserResolver,
    createCompanyUser: actionResolvers.CreateCompanyUserResolver,
    deleteCompanyUser: actionResolvers.DeleteCompanyUserResolver,
    updateCompanyUser: actionResolvers.UpdateCompanyUserResolver,
    deleteManyCompanyUser: actionResolvers.DeleteManyCompanyUserResolver,
    updateManyCompanyUser: actionResolvers.UpdateManyCompanyUserResolver,
    upsertCompanyUser: actionResolvers.UpsertCompanyUserResolver,
    aggregateCompanyUser: actionResolvers.AggregateCompanyUserResolver,
    groupByCompanyUser: actionResolvers.GroupByCompanyUserResolver
  },
  Location: {
    location: actionResolvers.FindUniqueLocationResolver,
    findFirstLocation: actionResolvers.FindFirstLocationResolver,
    locations: actionResolvers.FindManyLocationResolver,
    createLocation: actionResolvers.CreateLocationResolver,
    deleteLocation: actionResolvers.DeleteLocationResolver,
    updateLocation: actionResolvers.UpdateLocationResolver,
    deleteManyLocation: actionResolvers.DeleteManyLocationResolver,
    updateManyLocation: actionResolvers.UpdateManyLocationResolver,
    upsertLocation: actionResolvers.UpsertLocationResolver,
    aggregateLocation: actionResolvers.AggregateLocationResolver,
    groupByLocation: actionResolvers.GroupByLocationResolver
  },
  Marketplace: {
    marketplace: actionResolvers.FindUniqueMarketplaceResolver,
    findFirstMarketplace: actionResolvers.FindFirstMarketplaceResolver,
    marketplaces: actionResolvers.FindManyMarketplaceResolver,
    createMarketplace: actionResolvers.CreateMarketplaceResolver,
    deleteMarketplace: actionResolvers.DeleteMarketplaceResolver,
    updateMarketplace: actionResolvers.UpdateMarketplaceResolver,
    deleteManyMarketplace: actionResolvers.DeleteManyMarketplaceResolver,
    updateManyMarketplace: actionResolvers.UpdateManyMarketplaceResolver,
    upsertMarketplace: actionResolvers.UpsertMarketplaceResolver,
    aggregateMarketplace: actionResolvers.AggregateMarketplaceResolver,
    groupByMarketplace: actionResolvers.GroupByMarketplaceResolver
  },
  Drum: {
    drum: actionResolvers.FindUniqueDrumResolver,
    findFirstDrum: actionResolvers.FindFirstDrumResolver,
    drums: actionResolvers.FindManyDrumResolver,
    createDrum: actionResolvers.CreateDrumResolver,
    deleteDrum: actionResolvers.DeleteDrumResolver,
    updateDrum: actionResolvers.UpdateDrumResolver,
    deleteManyDrum: actionResolvers.DeleteManyDrumResolver,
    updateManyDrum: actionResolvers.UpdateManyDrumResolver,
    upsertDrum: actionResolvers.UpsertDrumResolver,
    aggregateDrum: actionResolvers.AggregateDrumResolver,
    groupByDrum: actionResolvers.GroupByDrumResolver
  },
  DrumType: {
    drumType: actionResolvers.FindUniqueDrumTypeResolver,
    findFirstDrumType: actionResolvers.FindFirstDrumTypeResolver,
    drumTypes: actionResolvers.FindManyDrumTypeResolver,
    createDrumType: actionResolvers.CreateDrumTypeResolver,
    deleteDrumType: actionResolvers.DeleteDrumTypeResolver,
    updateDrumType: actionResolvers.UpdateDrumTypeResolver,
    deleteManyDrumType: actionResolvers.DeleteManyDrumTypeResolver,
    updateManyDrumType: actionResolvers.UpdateManyDrumTypeResolver,
    upsertDrumType: actionResolvers.UpsertDrumTypeResolver,
    aggregateDrumType: actionResolvers.AggregateDrumTypeResolver,
    groupByDrumType: actionResolvers.GroupByDrumTypeResolver
  },
  DrumStateHistory: {
    drumStateHistory: actionResolvers.FindUniqueDrumStateHistoryResolver,
    findFirstDrumStateHistory: actionResolvers.FindFirstDrumStateHistoryResolver,
    drumStateHistories: actionResolvers.FindManyDrumStateHistoryResolver,
    createDrumStateHistory: actionResolvers.CreateDrumStateHistoryResolver,
    deleteDrumStateHistory: actionResolvers.DeleteDrumStateHistoryResolver,
    updateDrumStateHistory: actionResolvers.UpdateDrumStateHistoryResolver,
    deleteManyDrumStateHistory: actionResolvers.DeleteManyDrumStateHistoryResolver,
    updateManyDrumStateHistory: actionResolvers.UpdateManyDrumStateHistoryResolver,
    upsertDrumStateHistory: actionResolvers.UpsertDrumStateHistoryResolver,
    aggregateDrumStateHistory: actionResolvers.AggregateDrumStateHistoryResolver,
    groupByDrumStateHistory: actionResolvers.GroupByDrumStateHistoryResolver
  },
  DrumMovementHistory: {
    drumMovementHistory: actionResolvers.FindUniqueDrumMovementHistoryResolver,
    findFirstDrumMovementHistory: actionResolvers.FindFirstDrumMovementHistoryResolver,
    drumMovementHistories: actionResolvers.FindManyDrumMovementHistoryResolver,
    createDrumMovementHistory: actionResolvers.CreateDrumMovementHistoryResolver,
    deleteDrumMovementHistory: actionResolvers.DeleteDrumMovementHistoryResolver,
    updateDrumMovementHistory: actionResolvers.UpdateDrumMovementHistoryResolver,
    deleteManyDrumMovementHistory: actionResolvers.DeleteManyDrumMovementHistoryResolver,
    updateManyDrumMovementHistory: actionResolvers.UpdateManyDrumMovementHistoryResolver,
    upsertDrumMovementHistory: actionResolvers.UpsertDrumMovementHistoryResolver,
    aggregateDrumMovementHistory: actionResolvers.AggregateDrumMovementHistoryResolver,
    groupByDrumMovementHistory: actionResolvers.GroupByDrumMovementHistoryResolver
  }
};
const resolversInfo = {
  Post: ["post", "findFirstPost", "posts", "createPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  User: ["user", "findFirstUser", "users", "createUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Company: ["company", "findFirstCompany", "companies", "createCompany", "deleteCompany", "updateCompany", "deleteManyCompany", "updateManyCompany", "upsertCompany", "aggregateCompany", "groupByCompany"],
  CompanyUser: ["companyUser", "findFirstCompanyUser", "companyUsers", "createCompanyUser", "deleteCompanyUser", "updateCompanyUser", "deleteManyCompanyUser", "updateManyCompanyUser", "upsertCompanyUser", "aggregateCompanyUser", "groupByCompanyUser"],
  Location: ["location", "findFirstLocation", "locations", "createLocation", "deleteLocation", "updateLocation", "deleteManyLocation", "updateManyLocation", "upsertLocation", "aggregateLocation", "groupByLocation"],
  Marketplace: ["marketplace", "findFirstMarketplace", "marketplaces", "createMarketplace", "deleteMarketplace", "updateMarketplace", "deleteManyMarketplace", "updateManyMarketplace", "upsertMarketplace", "aggregateMarketplace", "groupByMarketplace"],
  Drum: ["drum", "findFirstDrum", "drums", "createDrum", "deleteDrum", "updateDrum", "deleteManyDrum", "updateManyDrum", "upsertDrum", "aggregateDrum", "groupByDrum"],
  DrumType: ["drumType", "findFirstDrumType", "drumTypes", "createDrumType", "deleteDrumType", "updateDrumType", "deleteManyDrumType", "updateManyDrumType", "upsertDrumType", "aggregateDrumType", "groupByDrumType"],
  DrumStateHistory: ["drumStateHistory", "findFirstDrumStateHistory", "drumStateHistories", "createDrumStateHistory", "deleteDrumStateHistory", "updateDrumStateHistory", "deleteManyDrumStateHistory", "updateManyDrumStateHistory", "upsertDrumStateHistory", "aggregateDrumStateHistory", "groupByDrumStateHistory"],
  DrumMovementHistory: ["drumMovementHistory", "findFirstDrumMovementHistory", "drumMovementHistories", "createDrumMovementHistory", "deleteDrumMovementHistory", "updateDrumMovementHistory", "deleteManyDrumMovementHistory", "updateManyDrumMovementHistory", "upsertDrumMovementHistory", "aggregateDrumMovementHistory", "groupByDrumMovementHistory"]
};
const relationResolversInfo = {
  Post: ["author"],
  User: ["posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  Company: ["owner", "location", "marketplace"],
  CompanyUser: ["owner"],
  Location: ["owner", "companies", "drumStateHistory"],
  Marketplace: ["owner", "company"],
  Drum: ["owner", "drumType", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  DrumType: ["owner", "drum"],
  DrumStateHistory: ["owner", "drum", "location"],
  DrumMovementHistory: ["owner", "drum"]
};
const modelsInfo = {
  Post: ["id", "title", "content", "published", "authorId"],
  User: ["id", "email", "fullName", "createdAt", "updatedAt"],
  Company: ["id", "createdAt", "updatedAt", "ownerId", "name", "locationId"],
  CompanyUser: ["id", "createdAt", "updatedAt", "ownerId"],
  Location: ["id", "createdAt", "updatedAt", "ownerId", "address", "latitude", "longitude"],
  Marketplace: ["id", "createdAt", "updatedAt", "ownerId", "isCurrent", "isLast", "companyId", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  Drum: ["id", "createdAt", "updatedAt", "ownerId", "drumTypeId"],
  DrumType: ["id", "createdAt", "updatedAt", "ownerId", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId"],
  DrumStateHistory: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "state", "locationId"],
  DrumMovementHistory: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "latitude", "longitude"]
};
const inputsInfo = {
  PostWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "published", "author", "authorId"],
  PostOrderByInput: ["id", "title", "content", "published", "authorId"],
  PostWhereUniqueInput: ["id"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "content", "published", "authorId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "fullName", "posts", "createdAt", "updatedAt", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserOrderByInput: ["id", "email", "fullName", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "fullName", "createdAt", "updatedAt"],
  CompanyWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "owner", "name", "locationId", "location", "marketplace"],
  CompanyOrderByInput: ["id", "createdAt", "updatedAt", "ownerId", "name", "locationId"],
  CompanyWhereUniqueInput: ["id"],
  CompanyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "name", "locationId"],
  CompanyUserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "owner"],
  CompanyUserOrderByInput: ["id", "createdAt", "updatedAt", "ownerId"],
  CompanyUserWhereUniqueInput: ["id"],
  CompanyUserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId"],
  LocationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "owner", "address", "latitude", "longitude", "companies", "drumStateHistory"],
  LocationOrderByInput: ["id", "createdAt", "updatedAt", "ownerId", "address", "latitude", "longitude"],
  LocationWhereUniqueInput: ["id"],
  LocationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "address", "latitude", "longitude"],
  MarketplaceWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "owner", "isCurrent", "isLast", "companyId", "company", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  MarketplaceOrderByInput: ["id", "createdAt", "updatedAt", "ownerId", "isCurrent", "isLast", "companyId", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  MarketplaceWhereUniqueInput: ["id"],
  MarketplaceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "isCurrent", "isLast", "companyId", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  DrumWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "owner", "drumTypeId", "drumType", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  DrumOrderByInput: ["id", "createdAt", "updatedAt", "ownerId", "drumTypeId"],
  DrumWhereUniqueInput: ["id"],
  DrumScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "drumTypeId"],
  DrumTypeWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "owner", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId", "drum"],
  DrumTypeOrderByInput: ["id", "createdAt", "updatedAt", "ownerId", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId"],
  DrumTypeWhereUniqueInput: ["id"],
  DrumTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId"],
  DrumStateHistoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "owner", "drumId", "drum", "state", "locationId", "location"],
  DrumStateHistoryOrderByInput: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "state", "locationId"],
  DrumStateHistoryWhereUniqueInput: ["id"],
  DrumStateHistoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "drumId", "state", "locationId"],
  DrumMovementHistoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "owner", "drumId", "drum", "latitude", "longitude"],
  DrumMovementHistoryOrderByInput: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "latitude", "longitude"],
  DrumMovementHistoryWhereUniqueInput: ["id"],
  DrumMovementHistoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "drumId", "latitude", "longitude"],
  PostCreateInput: ["title", "content", "published", "author"],
  PostUpdateInput: ["title", "content", "published", "author"],
  PostUpdateManyMutationInput: ["title", "content", "published"],
  UserCreateInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserUpdateInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserUpdateManyMutationInput: ["id", "email", "fullName", "createdAt", "updatedAt"],
  CompanyCreateInput: ["id", "createdAt", "updatedAt", "name", "owner", "location", "marketplace"],
  CompanyUpdateInput: ["id", "createdAt", "updatedAt", "name", "owner", "location", "marketplace"],
  CompanyUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name"],
  CompanyUserCreateInput: ["id", "createdAt", "updatedAt", "owner"],
  CompanyUserUpdateInput: ["id", "createdAt", "updatedAt", "owner"],
  CompanyUserUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  LocationCreateInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude", "owner", "companies", "drumStateHistory"],
  LocationUpdateInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude", "owner", "companies", "drumStateHistory"],
  LocationUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude"],
  MarketplaceCreateInput: ["id", "createdAt", "updatedAt", "isCurrent", "isLast", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays", "owner", "company"],
  MarketplaceUpdateInput: ["id", "createdAt", "updatedAt", "isCurrent", "isLast", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays", "owner", "company"],
  MarketplaceUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "isCurrent", "isLast", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  DrumCreateInput: ["id", "createdAt", "updatedAt", "drumTypeId", "owner", "drumType", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  DrumUpdateInput: ["id", "createdAt", "updatedAt", "drumTypeId", "owner", "drumType", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  DrumUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "drumTypeId"],
  DrumTypeCreateInput: ["id", "createdAt", "updatedAt", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "owner", "drum"],
  DrumTypeUpdateInput: ["id", "createdAt", "updatedAt", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "owner", "drum"],
  DrumTypeUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth"],
  DrumStateHistoryCreateInput: ["id", "createdAt", "updatedAt", "state", "owner", "drum", "location"],
  DrumStateHistoryUpdateInput: ["id", "createdAt", "updatedAt", "state", "owner", "drum", "location"],
  DrumStateHistoryUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "state"],
  DrumMovementHistoryCreateInput: ["id", "createdAt", "updatedAt", "latitude", "longitude", "owner", "drum"],
  DrumMovementHistoryUpdateInput: ["id", "createdAt", "updatedAt", "latitude", "longitude", "owner", "drum"],
  DrumMovementHistoryUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "latitude", "longitude"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  BoolFilter: ["equals", "not"],
  UserRelationFilter: ["is", "isNot"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  BoolWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  PostListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CompanyListRelationFilter: ["every", "some", "none"],
  LocationListRelationFilter: ["every", "some", "none"],
  MarketplaceListRelationFilter: ["every", "some", "none"],
  DrumListRelationFilter: ["every", "some", "none"],
  DrumTypeListRelationFilter: ["every", "some", "none"],
  DrumStateHistoryListRelationFilter: ["every", "some", "none"],
  DrumMovementHistoryListRelationFilter: ["every", "some", "none"],
  CompanyUserListRelationFilter: ["every", "some", "none"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
  LocationRelationFilter: ["is", "isNot"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  BoolNullableFilter: ["equals", "not"],
  CompanyRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  DrumTypeRelationFilter: ["is", "isNot"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DrumRelationFilter: ["is", "isNot"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "connect"],
  CompanyCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  LocationCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  MarketplaceCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  DrumCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  DrumTypeCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  DrumStateHistoryCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  DrumMovementHistoryCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  CompanyUserCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CompanyUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  LocationUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  MarketplaceUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  DrumUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  DrumTypeUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  DrumStateHistoryUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  DrumMovementHistoryUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CompanyUserUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCompaniesInput: ["create", "connectOrCreate", "connect"],
  LocationCreateNestedOneWithoutCompaniesInput: ["create", "connectOrCreate", "connect"],
  MarketplaceCreateNestedManyWithoutCompanyInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutCompaniesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  LocationUpdateOneWithoutCompaniesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  MarketplaceUpdateManyWithoutCompanyInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCompanyUserInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutCompanyUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserCreateNestedOneWithoutLocationsInput: ["create", "connectOrCreate", "connect"],
  CompanyCreateNestedManyWithoutLocationInput: ["create", "connectOrCreate", "connect"],
  DrumStateHistoryCreateNestedManyWithoutLocationInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneWithoutLocationsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CompanyUpdateManyWithoutLocationInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  DrumStateHistoryUpdateManyWithoutLocationInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutMarketplacesInput: ["create", "connectOrCreate", "connect"],
  CompanyCreateNestedOneWithoutMarketplaceInput: ["create", "connectOrCreate", "connect"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneWithoutMarketplacesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CompanyUpdateOneWithoutMarketplaceInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UserCreateNestedOneWithoutDrumsInput: ["create", "connectOrCreate", "connect"],
  DrumTypeCreateNestedOneWithoutDrumInput: ["create", "connectOrCreate", "connect"],
  DrumStateHistoryCreateNestedManyWithoutDrumInput: ["create", "connectOrCreate", "connect"],
  DrumMovementHistoryCreateNestedManyWithoutDrumInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutDrumsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  DrumTypeUpdateOneWithoutDrumInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  DrumStateHistoryUpdateManyWithoutDrumInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  DrumMovementHistoryUpdateManyWithoutDrumInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutDrumTypesInput: ["create", "connectOrCreate", "connect"],
  DrumCreateNestedOneWithoutDrumTypeInput: ["create", "connectOrCreate", "connect"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneWithoutDrumTypesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  DrumUpdateOneRequiredWithoutDrumTypeInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutDrumStateHistoryUpdatesInput: ["create", "connectOrCreate", "connect"],
  DrumCreateNestedOneWithoutDrumStateHistoryUpdatesInput: ["create", "connectOrCreate", "connect"],
  LocationCreateNestedOneWithoutDrumStateHistoryInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutDrumStateHistoryUpdatesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  DrumUpdateOneRequiredWithoutDrumStateHistoryUpdatesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  LocationUpdateOneRequiredWithoutDrumStateHistoryInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutDrumMovementHistoryUpdatesInput: ["create", "connectOrCreate", "connect"],
  DrumCreateNestedOneWithoutDrumMovementHistoryUpdatesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutDrumMovementHistoryUpdatesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  DrumUpdateOneRequiredWithoutDrumMovementHistoryUpdatesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  UserCreateWithoutPostsInput: ["id", "email", "fullName", "createdAt", "updatedAt", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "email", "fullName", "createdAt", "updatedAt", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  PostCreateWithoutAuthorInput: ["title", "content", "published"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  CompanyCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "name", "location", "marketplace"],
  CompanyCreateOrConnectWithoutOwnerInput: ["where", "create"],
  LocationCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude", "companies", "drumStateHistory"],
  LocationCreateOrConnectWithoutOwnerInput: ["where", "create"],
  MarketplaceCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "isCurrent", "isLast", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays", "company"],
  MarketplaceCreateOrConnectWithoutOwnerInput: ["where", "create"],
  DrumCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "drumTypeId", "drumType", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  DrumCreateOrConnectWithoutOwnerInput: ["where", "create"],
  DrumTypeCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drum"],
  DrumTypeCreateOrConnectWithoutOwnerInput: ["where", "create"],
  DrumStateHistoryCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "state", "drum", "location"],
  DrumStateHistoryCreateOrConnectWithoutOwnerInput: ["where", "create"],
  DrumMovementHistoryCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "latitude", "longitude", "drum"],
  DrumMovementHistoryCreateOrConnectWithoutOwnerInput: ["where", "create"],
  CompanyUserCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt"],
  CompanyUserCreateOrConnectWithoutOwnerInput: ["where", "create"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "published", "authorId"],
  CompanyUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  CompanyUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  CompanyUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  CompanyScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "name", "locationId"],
  LocationUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  LocationUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  LocationUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  LocationScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "address", "latitude", "longitude"],
  MarketplaceUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  MarketplaceUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  MarketplaceUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  MarketplaceScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "isCurrent", "isLast", "companyId", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  DrumUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  DrumUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  DrumUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  DrumScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "drumTypeId"],
  DrumTypeUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  DrumTypeUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  DrumTypeUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  DrumTypeScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId"],
  DrumStateHistoryUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  DrumStateHistoryUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  DrumStateHistoryUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  DrumStateHistoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "drumId", "state", "locationId"],
  DrumMovementHistoryUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  DrumMovementHistoryUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  DrumMovementHistoryUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  DrumMovementHistoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId", "drumId", "latitude", "longitude"],
  CompanyUserUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  CompanyUserUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  CompanyUserUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  CompanyUserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "ownerId"],
  UserCreateWithoutCompaniesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserCreateOrConnectWithoutCompaniesInput: ["where", "create"],
  LocationCreateWithoutCompaniesInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude", "owner", "drumStateHistory"],
  LocationCreateOrConnectWithoutCompaniesInput: ["where", "create"],
  MarketplaceCreateWithoutCompanyInput: ["id", "createdAt", "updatedAt", "isCurrent", "isLast", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays", "owner"],
  MarketplaceCreateOrConnectWithoutCompanyInput: ["where", "create"],
  UserUpsertWithoutCompaniesInput: ["update", "create"],
  UserUpdateWithoutCompaniesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  LocationUpsertWithoutCompaniesInput: ["update", "create"],
  LocationUpdateWithoutCompaniesInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude", "owner", "drumStateHistory"],
  MarketplaceUpsertWithWhereUniqueWithoutCompanyInput: ["where", "update", "create"],
  MarketplaceUpdateWithWhereUniqueWithoutCompanyInput: ["where", "data"],
  MarketplaceUpdateManyWithWhereWithoutCompanyInput: ["where", "data"],
  UserCreateWithoutCompanyUserInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  UserCreateOrConnectWithoutCompanyUserInput: ["where", "create"],
  UserUpsertWithoutCompanyUserInput: ["update", "create"],
  UserUpdateWithoutCompanyUserInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  UserCreateWithoutLocationsInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserCreateOrConnectWithoutLocationsInput: ["where", "create"],
  CompanyCreateWithoutLocationInput: ["id", "createdAt", "updatedAt", "name", "owner", "marketplace"],
  CompanyCreateOrConnectWithoutLocationInput: ["where", "create"],
  DrumStateHistoryCreateWithoutLocationInput: ["id", "createdAt", "updatedAt", "state", "owner", "drum"],
  DrumStateHistoryCreateOrConnectWithoutLocationInput: ["where", "create"],
  UserUpsertWithoutLocationsInput: ["update", "create"],
  UserUpdateWithoutLocationsInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  CompanyUpsertWithWhereUniqueWithoutLocationInput: ["where", "update", "create"],
  CompanyUpdateWithWhereUniqueWithoutLocationInput: ["where", "data"],
  CompanyUpdateManyWithWhereWithoutLocationInput: ["where", "data"],
  DrumStateHistoryUpsertWithWhereUniqueWithoutLocationInput: ["where", "update", "create"],
  DrumStateHistoryUpdateWithWhereUniqueWithoutLocationInput: ["where", "data"],
  DrumStateHistoryUpdateManyWithWhereWithoutLocationInput: ["where", "data"],
  UserCreateWithoutMarketplacesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserCreateOrConnectWithoutMarketplacesInput: ["where", "create"],
  CompanyCreateWithoutMarketplaceInput: ["id", "createdAt", "updatedAt", "name", "owner", "location"],
  CompanyCreateOrConnectWithoutMarketplaceInput: ["where", "create"],
  UserUpsertWithoutMarketplacesInput: ["update", "create"],
  UserUpdateWithoutMarketplacesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "drums", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  CompanyUpsertWithoutMarketplaceInput: ["update", "create"],
  CompanyUpdateWithoutMarketplaceInput: ["id", "createdAt", "updatedAt", "name", "owner", "location"],
  UserCreateWithoutDrumsInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserCreateOrConnectWithoutDrumsInput: ["where", "create"],
  DrumTypeCreateWithoutDrumInput: ["id", "createdAt", "updatedAt", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "owner"],
  DrumTypeCreateOrConnectWithoutDrumInput: ["where", "create"],
  DrumStateHistoryCreateWithoutDrumInput: ["id", "createdAt", "updatedAt", "state", "owner", "location"],
  DrumStateHistoryCreateOrConnectWithoutDrumInput: ["where", "create"],
  DrumMovementHistoryCreateWithoutDrumInput: ["id", "createdAt", "updatedAt", "latitude", "longitude", "owner"],
  DrumMovementHistoryCreateOrConnectWithoutDrumInput: ["where", "create"],
  UserUpsertWithoutDrumsInput: ["update", "create"],
  UserUpdateWithoutDrumsInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drumTypes", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  DrumTypeUpsertWithoutDrumInput: ["update", "create"],
  DrumTypeUpdateWithoutDrumInput: ["id", "createdAt", "updatedAt", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "owner"],
  DrumStateHistoryUpsertWithWhereUniqueWithoutDrumInput: ["where", "update", "create"],
  DrumStateHistoryUpdateWithWhereUniqueWithoutDrumInput: ["where", "data"],
  DrumStateHistoryUpdateManyWithWhereWithoutDrumInput: ["where", "data"],
  DrumMovementHistoryUpsertWithWhereUniqueWithoutDrumInput: ["where", "update", "create"],
  DrumMovementHistoryUpdateWithWhereUniqueWithoutDrumInput: ["where", "data"],
  DrumMovementHistoryUpdateManyWithWhereWithoutDrumInput: ["where", "data"],
  UserCreateWithoutDrumTypesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  UserCreateOrConnectWithoutDrumTypesInput: ["where", "create"],
  DrumCreateWithoutDrumTypeInput: ["id", "createdAt", "updatedAt", "drumTypeId", "owner", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  DrumCreateOrConnectWithoutDrumTypeInput: ["where", "create"],
  UserUpsertWithoutDrumTypesInput: ["update", "create"],
  UserUpdateWithoutDrumTypesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumStateHistoryUpdates", "drumMovementHistoryUpdates", "companyUser"],
  DrumUpsertWithoutDrumTypeInput: ["update", "create"],
  DrumUpdateWithoutDrumTypeInput: ["id", "createdAt", "updatedAt", "drumTypeId", "owner", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  UserCreateWithoutDrumStateHistoryUpdatesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumMovementHistoryUpdates", "companyUser"],
  UserCreateOrConnectWithoutDrumStateHistoryUpdatesInput: ["where", "create"],
  DrumCreateWithoutDrumStateHistoryUpdatesInput: ["id", "createdAt", "updatedAt", "drumTypeId", "owner", "drumType", "drumMovementHistoryUpdates"],
  DrumCreateOrConnectWithoutDrumStateHistoryUpdatesInput: ["where", "create"],
  LocationCreateWithoutDrumStateHistoryInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude", "owner", "companies"],
  LocationCreateOrConnectWithoutDrumStateHistoryInput: ["where", "create"],
  UserUpsertWithoutDrumStateHistoryUpdatesInput: ["update", "create"],
  UserUpdateWithoutDrumStateHistoryUpdatesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumMovementHistoryUpdates", "companyUser"],
  DrumUpsertWithoutDrumStateHistoryUpdatesInput: ["update", "create"],
  DrumUpdateWithoutDrumStateHistoryUpdatesInput: ["id", "createdAt", "updatedAt", "drumTypeId", "owner", "drumType", "drumMovementHistoryUpdates"],
  LocationUpsertWithoutDrumStateHistoryInput: ["update", "create"],
  LocationUpdateWithoutDrumStateHistoryInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude", "owner", "companies"],
  UserCreateWithoutDrumMovementHistoryUpdatesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "companyUser"],
  UserCreateOrConnectWithoutDrumMovementHistoryUpdatesInput: ["where", "create"],
  DrumCreateWithoutDrumMovementHistoryUpdatesInput: ["id", "createdAt", "updatedAt", "drumTypeId", "owner", "drumType", "drumStateHistoryUpdates"],
  DrumCreateOrConnectWithoutDrumMovementHistoryUpdatesInput: ["where", "create"],
  UserUpsertWithoutDrumMovementHistoryUpdatesInput: ["update", "create"],
  UserUpdateWithoutDrumMovementHistoryUpdatesInput: ["id", "email", "fullName", "createdAt", "updatedAt", "posts", "companies", "locations", "marketplaces", "drums", "drumTypes", "drumStateHistoryUpdates", "companyUser"],
  DrumUpsertWithoutDrumMovementHistoryUpdatesInput: ["update", "create"],
  DrumUpdateWithoutDrumMovementHistoryUpdatesInput: ["id", "createdAt", "updatedAt", "drumTypeId", "owner", "drumType", "drumStateHistoryUpdates"],
  PostUpdateWithoutAuthorInput: ["title", "content", "published"],
  CompanyUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "name", "location", "marketplace"],
  LocationUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "address", "latitude", "longitude", "companies", "drumStateHistory"],
  MarketplaceUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "isCurrent", "isLast", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays", "company"],
  DrumUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "drumTypeId", "drumType", "drumStateHistoryUpdates", "drumMovementHistoryUpdates"],
  DrumTypeUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drum"],
  DrumStateHistoryUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "state", "drum", "location"],
  DrumMovementHistoryUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "latitude", "longitude", "drum"],
  CompanyUserUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt"],
  MarketplaceUpdateWithoutCompanyInput: ["id", "createdAt", "updatedAt", "isCurrent", "isLast", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays", "owner"],
  CompanyUpdateWithoutLocationInput: ["id", "createdAt", "updatedAt", "name", "owner", "marketplace"],
  DrumStateHistoryUpdateWithoutLocationInput: ["id", "createdAt", "updatedAt", "state", "owner", "drum"],
  DrumStateHistoryUpdateWithoutDrumInput: ["id", "createdAt", "updatedAt", "state", "owner", "location"],
  DrumMovementHistoryUpdateWithoutDrumInput: ["id", "createdAt", "updatedAt", "latitude", "longitude", "owner"]
};
const outputsInfo = {
  AggregatePost: ["count", "avg", "sum", "min", "max"],
  PostGroupBy: ["id", "title", "content", "published", "authorId", "count", "avg", "sum", "min", "max"],
  AggregateUser: ["count", "min", "max"],
  UserGroupBy: ["id", "email", "fullName", "createdAt", "updatedAt", "count", "min", "max"],
  AggregateCompany: ["count", "min", "max"],
  CompanyGroupBy: ["id", "createdAt", "updatedAt", "ownerId", "name", "locationId", "count", "min", "max"],
  AggregateCompanyUser: ["count", "min", "max"],
  CompanyUserGroupBy: ["id", "createdAt", "updatedAt", "ownerId", "count", "min", "max"],
  AggregateLocation: ["count", "avg", "sum", "min", "max"],
  LocationGroupBy: ["id", "createdAt", "updatedAt", "ownerId", "address", "latitude", "longitude", "count", "avg", "sum", "min", "max"],
  AggregateMarketplace: ["count", "avg", "sum", "min", "max"],
  MarketplaceGroupBy: ["id", "createdAt", "updatedAt", "ownerId", "isCurrent", "isLast", "companyId", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays", "count", "avg", "sum", "min", "max"],
  AggregateDrum: ["count", "min", "max"],
  DrumGroupBy: ["id", "createdAt", "updatedAt", "ownerId", "drumTypeId", "count", "min", "max"],
  AggregateDrumType: ["count", "avg", "sum", "min", "max"],
  DrumTypeGroupBy: ["id", "createdAt", "updatedAt", "ownerId", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId", "count", "avg", "sum", "min", "max"],
  AggregateDrumStateHistory: ["count", "min", "max"],
  DrumStateHistoryGroupBy: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "state", "locationId", "count", "min", "max"],
  AggregateDrumMovementHistory: ["count", "avg", "sum", "min", "max"],
  DrumMovementHistoryGroupBy: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "latitude", "longitude", "count", "avg", "sum", "min", "max"],
  AffectedRowsOutput: ["count"],
  PostCountAggregate: ["id", "title", "content", "published", "authorId", "_all"],
  PostAvgAggregate: ["id"],
  PostSumAggregate: ["id"],
  PostMinAggregate: ["id", "title", "content", "published", "authorId"],
  PostMaxAggregate: ["id", "title", "content", "published", "authorId"],
  UserCountAggregate: ["id", "email", "fullName", "createdAt", "updatedAt", "_all"],
  UserMinAggregate: ["id", "email", "fullName", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "email", "fullName", "createdAt", "updatedAt"],
  CompanyCountAggregate: ["id", "createdAt", "updatedAt", "ownerId", "name", "locationId", "_all"],
  CompanyMinAggregate: ["id", "createdAt", "updatedAt", "ownerId", "name", "locationId"],
  CompanyMaxAggregate: ["id", "createdAt", "updatedAt", "ownerId", "name", "locationId"],
  CompanyUserCountAggregate: ["id", "createdAt", "updatedAt", "ownerId", "_all"],
  CompanyUserMinAggregate: ["id", "createdAt", "updatedAt", "ownerId"],
  CompanyUserMaxAggregate: ["id", "createdAt", "updatedAt", "ownerId"],
  LocationCountAggregate: ["id", "createdAt", "updatedAt", "ownerId", "address", "latitude", "longitude", "_all"],
  LocationAvgAggregate: ["latitude", "longitude"],
  LocationSumAggregate: ["latitude", "longitude"],
  LocationMinAggregate: ["id", "createdAt", "updatedAt", "ownerId", "address", "latitude", "longitude"],
  LocationMaxAggregate: ["id", "createdAt", "updatedAt", "ownerId", "address", "latitude", "longitude"],
  MarketplaceCountAggregate: ["id", "createdAt", "updatedAt", "ownerId", "isCurrent", "isLast", "companyId", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays", "_all"],
  MarketplaceAvgAggregate: ["gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  MarketplaceSumAggregate: ["gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  MarketplaceMinAggregate: ["id", "createdAt", "updatedAt", "ownerId", "isCurrent", "isLast", "companyId", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  MarketplaceMaxAggregate: ["id", "createdAt", "updatedAt", "ownerId", "isCurrent", "isLast", "companyId", "drumId", "gracePeriodInDays", "minimumRentPeriodInMonths", "reservationPeriodInDays"],
  DrumCountAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumTypeId", "_all"],
  DrumMinAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumTypeId"],
  DrumMaxAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumTypeId"],
  DrumTypeCountAggregate: ["id", "createdAt", "updatedAt", "ownerId", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId", "_all"],
  DrumTypeAvgAggregate: ["coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "maximumLoadWeight", "overallWidth"],
  DrumTypeSumAggregate: ["coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "maximumLoadWeight", "overallWidth"],
  DrumTypeMinAggregate: ["id", "createdAt", "updatedAt", "ownerId", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId"],
  DrumTypeMaxAggregate: ["id", "createdAt", "updatedAt", "ownerId", "coreDiameter", "coreWidth", "drivingBoreDiameter", "drivingBoreOffset", "emptyWeight", "flangeDiameter", "material", "maximumLoadWeight", "name", "overallWidth", "drumId"],
  DrumStateHistoryCountAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "state", "locationId", "_all"],
  DrumStateHistoryMinAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "state", "locationId"],
  DrumStateHistoryMaxAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "state", "locationId"],
  DrumMovementHistoryCountAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "latitude", "longitude", "_all"],
  DrumMovementHistoryAvgAggregate: ["latitude", "longitude"],
  DrumMovementHistorySumAggregate: ["latitude", "longitude"],
  DrumMovementHistoryMinAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "latitude", "longitude"],
  DrumMovementHistoryMaxAggregate: ["id", "createdAt", "updatedAt", "ownerId", "drumId", "latitude", "longitude"]
};
const argsInfo = {
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCompanyArgs: ["where"],
  FindFirstCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCompanyArgs: ["data"],
  DeleteCompanyArgs: ["where"],
  UpdateCompanyArgs: ["data", "where"],
  DeleteManyCompanyArgs: ["where"],
  UpdateManyCompanyArgs: ["data", "where"],
  UpsertCompanyArgs: ["where", "create", "update"],
  AggregateCompanyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCompanyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCompanyUserArgs: ["where"],
  FindFirstCompanyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCompanyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCompanyUserArgs: ["data"],
  DeleteCompanyUserArgs: ["where"],
  UpdateCompanyUserArgs: ["data", "where"],
  DeleteManyCompanyUserArgs: ["where"],
  UpdateManyCompanyUserArgs: ["data", "where"],
  UpsertCompanyUserArgs: ["where", "create", "update"],
  AggregateCompanyUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCompanyUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueLocationArgs: ["where"],
  FindFirstLocationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLocationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateLocationArgs: ["data"],
  DeleteLocationArgs: ["where"],
  UpdateLocationArgs: ["data", "where"],
  DeleteManyLocationArgs: ["where"],
  UpdateManyLocationArgs: ["data", "where"],
  UpsertLocationArgs: ["where", "create", "update"],
  AggregateLocationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByLocationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMarketplaceArgs: ["where"],
  FindFirstMarketplaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMarketplaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMarketplaceArgs: ["data"],
  DeleteMarketplaceArgs: ["where"],
  UpdateMarketplaceArgs: ["data", "where"],
  DeleteManyMarketplaceArgs: ["where"],
  UpdateManyMarketplaceArgs: ["data", "where"],
  UpsertMarketplaceArgs: ["where", "create", "update"],
  AggregateMarketplaceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMarketplaceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDrumArgs: ["where"],
  FindFirstDrumArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDrumArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDrumArgs: ["data"],
  DeleteDrumArgs: ["where"],
  UpdateDrumArgs: ["data", "where"],
  DeleteManyDrumArgs: ["where"],
  UpdateManyDrumArgs: ["data", "where"],
  UpsertDrumArgs: ["where", "create", "update"],
  AggregateDrumArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDrumArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDrumTypeArgs: ["where"],
  FindFirstDrumTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDrumTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDrumTypeArgs: ["data"],
  DeleteDrumTypeArgs: ["where"],
  UpdateDrumTypeArgs: ["data", "where"],
  DeleteManyDrumTypeArgs: ["where"],
  UpdateManyDrumTypeArgs: ["data", "where"],
  UpsertDrumTypeArgs: ["where", "create", "update"],
  AggregateDrumTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDrumTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDrumStateHistoryArgs: ["where"],
  FindFirstDrumStateHistoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDrumStateHistoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDrumStateHistoryArgs: ["data"],
  DeleteDrumStateHistoryArgs: ["where"],
  UpdateDrumStateHistoryArgs: ["data", "where"],
  DeleteManyDrumStateHistoryArgs: ["where"],
  UpdateManyDrumStateHistoryArgs: ["data", "where"],
  UpsertDrumStateHistoryArgs: ["where", "create", "update"],
  AggregateDrumStateHistoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDrumStateHistoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDrumMovementHistoryArgs: ["where"],
  FindFirstDrumMovementHistoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDrumMovementHistoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDrumMovementHistoryArgs: ["data"],
  DeleteDrumMovementHistoryArgs: ["where"],
  UpdateDrumMovementHistoryArgs: ["data", "where"],
  DeleteManyDrumMovementHistoryArgs: ["where"],
  UpdateManyDrumMovementHistoryArgs: ["data", "where"],
  UpsertDrumMovementHistoryArgs: ["where", "create", "update"],
  AggregateDrumMovementHistoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDrumMovementHistoryArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







