import { Entity, Column, OneToMany } from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { IsEmail } from "class-validator";
import { CoreEntity } from './CoreEntity';
import { DrumEntity } from './DrumEntity';
import { LocationEntity } from './LocationEntity';
import { CompanyEntity } from './CompanyEntity';
import { ReservationEntity } from './ReservationEntity';
import { MarketplaceEntity } from './MarketplaceEntity';
import { DrumTypeEntity } from './DrumTypeEntity';

export interface UserPayload {
  email: string
  fullName?: string
}

@ObjectType()
@Entity()
export class UserEntity extends CoreEntity implements UserPayload {
  @Field()
  @IsEmail()
  @Column({
    unique: true,
  })
  email: string

  @Field()
  @Column({ nullable: true })
  fullName?: string

  // Relationships

  @Field(() => [DrumEntity])
  @OneToMany(() => DrumEntity, drum => drum.owner, { lazy: true })
  drums: DrumEntity[];

  @Field(() => [DrumTypeEntity])
  @OneToMany(() => DrumTypeEntity, drum => drum.owner, { lazy: true })
  drumTypes: DrumTypeEntity[];

  @Field(() => [LocationEntity])
  @OneToMany(() => LocationEntity, location => location.owner, { lazy: true })
  userLocations: LocationEntity[];

  @Field(() => [CompanyEntity])
  @OneToMany(() => CompanyEntity, (company) => company.owner, { lazy: true })
  userCompanies: CompanyEntity[]

  @Field(() => [ReservationEntity])
  @OneToMany(() => ReservationEntity, (reservation) => reservation.user, { lazy: true })
  userReservations: ReservationEntity[]

  @Field(() => [MarketplaceEntity])
  @OneToMany(() => MarketplaceEntity, (marketplace) => marketplace.user, { lazy: true })
  userMarketplaces: MarketplaceEntity[]
}

