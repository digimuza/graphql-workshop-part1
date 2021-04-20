import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { CoreEntity } from './CoreEntity';
import { LocationEntity } from "./LocationEntity";
import { UserEntity } from './UserEntity';
import { MarketplaceEntity } from "./MarketplaceEntity";
import { ReservationEntity } from "./ReservationEntity";

export interface CompanyPayload {
  name: string
  ownerId: string
  locationId: string
}

@ObjectType()
@Entity()
export class CompanyEntity extends CoreEntity implements CompanyPayload {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  ownerId: string

  @Field()
  @Column()
  locationId: string

  // Relations
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user, { lazy: true })
  @JoinColumn({ name: "ownerId" })
  owner: UserEntity;

  @Field(() => [ReservationEntity])
  @OneToMany(() => CompanyEntity, company => company.reservations, { lazy: true })
  reservations: ReservationEntity[]

  @Field(() => [MarketplaceEntity])
  @OneToMany(() => MarketplaceEntity, (market) => market.company, { lazy: true })
  marketplaces: MarketplaceEntity[]

  @Field(() => [LocationEntity])
  @ManyToOne(() => LocationEntity, { lazy: true })
  @JoinColumn({ name: "locationId" })
  location: LocationEntity;
}
