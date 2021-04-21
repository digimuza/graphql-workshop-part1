import { Entity, Column, ManyToOne } from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { CoreEntity } from './CoreEntity';
import { DrumEntity } from './DrumEntity';
import { LocationEntity } from './LocationEntity';
import { CompanyEntity } from './CompanyEntity';
import { UserEntity } from './UserEntity';


export interface MarketplacePayload {
  gracePeriodInDays?: number;
  isLast?: boolean
  minimumRentPeriodInMonths?: number;
  reservationPeriodInDays?: number;
  state?: string;
}

@ObjectType()
@Entity()
export class MarketplaceEntity extends CoreEntity {
  @Column({
    type: 'int'
  })
  gracePeriodInDays?: number;

  @Column({
    nullable: true
  })
  isLast?: boolean;

  @ManyToOne(() => LocationEntity, (location) => location)
  location: LocationEntity;

  @Column({
    type: 'int'
  })
  minimumRentPeriodInMonths?: number;

  @Column({
    type: 'int',
  })
  reservationPeriodInDays?: number;

  @Column()
  state?: string;

  // Relationships
  @Field(() => CompanyEntity)
  @ManyToOne(() => CompanyEntity, (company) => company.marketplaces)
  company: CompanyEntity;

  @Field(() => DrumEntity)
  @ManyToOne(() => DrumEntity, (drum) => drum.marketplaces)
  drum: DrumEntity;

  @ManyToOne(() => UserEntity, (user) => user.userMarketplaces)
  user: UserEntity;
}
