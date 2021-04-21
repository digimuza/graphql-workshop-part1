import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { CoreEntity } from './CoreEntity';
import { CompanyEntity } from './CompanyEntity';
import { UserEntity } from './UserEntity';
import { MarketplaceEntity } from "./MarketplaceEntity";
import { ReservationEntity } from "./ReservationEntity";

export interface LocationPayload {
  address: string
  name?: string
}

@ObjectType()
@Entity()
export class LocationEntity extends CoreEntity implements LocationPayload {
  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  name?: string;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, user => user.userLocations)
  owner: UserEntity;

  @Field(() => [LocationEntity])
  @OneToMany(() => CompanyEntity, (company) => company.location)
  companies: LocationEntity[];

  @Field(() => [ReservationEntity])
  @OneToMany(() => ReservationEntity, (reservation) => reservation.location)
  reservations: ReservationEntity[]

  @Field(() => [MarketplaceEntity])
  @OneToMany(() => MarketplaceEntity, (market) => market.location)
  marketplaces: MarketplaceEntity[]
}
