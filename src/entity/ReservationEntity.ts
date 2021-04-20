import { Entity, Column, ManyToOne } from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { LocationEntity } from './LocationEntity';
import { CompanyEntity } from './CompanyEntity';
import { UserEntity } from './UserEntity';
import { DrumEntity } from './DrumEntity';
import { CoreEntity } from './CoreEntity';


@ObjectType()
@Entity()
export class ReservationEntity extends CoreEntity {
  @Field()
  @Column()
  reservationExpirationDate: Date;

  @Column()
  state?: string;

  // Relationships

  @ManyToOne(() => CompanyEntity, (company) => company.reservations)
  company?: CompanyEntity;

  @ManyToOne(() => DrumEntity, drum => drum.reservations)
  drum: DrumEntity;

  @Field(() => LocationEntity)
  @ManyToOne(() => LocationEntity, (location) => location.reservations)
  location: LocationEntity;


  @ManyToOne(() => UserEntity, (user) => user.userReservations)
  user: UserEntity;
}
