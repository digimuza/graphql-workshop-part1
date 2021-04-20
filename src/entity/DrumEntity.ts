import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { CoreEntity } from './CoreEntity';
import { UserEntity } from './UserEntity';
import { MarketplaceEntity } from "./MarketplaceEntity";
import { DrumTypeEntity } from './DrumTypeEntity';
import { ReservationEntity } from './ReservationEntity';

@ObjectType()
@Entity()
export class DrumEntity extends CoreEntity {
  @Field()
  @Column()
  ownerId: string

  @Field()
  @Column({ unique: true })
  drumTypeId: string

  // RELATIONSHIPS
  @Field(() => DrumTypeEntity)
  @OneToOne(() => DrumTypeEntity, drumType => drumType.drum)
  @JoinColumn({ name: "drumTypeId" })
  drumType: DrumTypeEntity

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, user => user.drums)
  @JoinColumn({ name: "ownerId" })
  owner: UserEntity;

  @Field(() => MarketplaceEntity)
  @OneToMany(() => MarketplaceEntity, (market) => market.drum)
  marketplaces: MarketplaceEntity

  @Field(() => [ReservationEntity])
  @OneToMany(() => ReservationEntity, (reservation) => reservation.drum)
  reservations: ReservationEntity[]
}
