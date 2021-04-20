import { Entity, Column, ManyToOne, OneToOne } from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { CoreEntity } from './CoreEntity';
import { UserEntity } from './UserEntity';
import { DrumEntity } from './DrumEntity';

export interface DrumTypePayload {
  coreDiameter: number;
  coreWidth: number;
  drivingBoreDiameter?: number;
  drivingBoreOffset?: number;
  emptyWeight: number;
  flangeDiameter: number;
  material?: string;
  maximumLoadWeight: number;
  name: string;
  overallWidth: number;
}

@ObjectType()
@Entity()
export class DrumTypeEntity extends CoreEntity implements DrumTypePayload {
  @Field()
  @Column({
    type: "float"
  })
  coreDiameter: number;

  @Field()
  @Column({
    type: "float"
  })
  coreWidth: number;

  @Field()
  @Column({
    type: "float"
  })
  drivingBoreDiameter?: number;

  @Field()
  @Column({
    type: "float"
  })
  drivingBoreOffset?: number;

  @Field()
  @Column({
    type: "float"
  })
  emptyWeight: number;

  @Field()
  @Column({
    type: "float"
  })
  flangeDiameter: number;

  @Field()
  @Column()
  material?: string;

  @Field()
  @Column({
    type: "float"
  })
  maximumLoadWeight: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({
    type: "float"
  })
  overallWidth: number;

  @Field(() => UserEntity, { nullable: true })
  @ManyToOne(() => UserEntity, drum => drum.drumTypes)
  owner?: UserEntity;

  @Field(() => DrumEntity)
  @OneToOne(() => DrumEntity, drum => drum)
  drum: DrumEntity
}
