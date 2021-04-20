import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { getRepository } from 'typeorm';
import { DrumEntity } from '../entity/DrumEntity';
import { createBaseResponse, FillObject } from '../_helpers';
import { MyContext } from '../graphql-types/MyContext';
import { DrumTypePayload } from "src/entity/DrumTypeEntity";
import { IsUUID } from "class-validator";
import { isArgsValid } from '../middleware/isArgsValid';

const CreateUpdateDrumResponse = createBaseResponse(DrumEntity)

class DrumTypeInput implements DrumTypePayload {
  @Field()
  coreDiameter: number;
  @Field()
  coreWidth: number;
  @Field()
  drivingBoreDiameter?: number | undefined;
  @Field()
  drivingBoreOffset?: number | undefined;
  @Field()
  emptyWeight: number;
  @Field()
  flangeDiameter: number;
  @Field()
  material?: string | undefined;
  @Field()
  maximumLoadWeight: number;
  @Field()
  name: string;
  @Field()
  overallWidth: number;
}

class PartialDrumTypeInput implements Partial<DrumTypePayload> {
  @Field()
  coreDiameter?: number;
  @Field()
  coreWidth?: number;
  @Field()
  drivingBoreDiameter?: number | undefined;
  @Field()
  drivingBoreOffset?: number | undefined;
  @Field()
  emptyWeight?: number;
  @Field()
  flangeDiameter?: number;
  @Field()
  material?: string | undefined;
  @Field()
  maximumLoadWeight?: number;
  @Field()
  name?: string;
  @Field()
  overallWidth?: number;
}

@InputType()
class CreateDrumInput extends FillObject {
  @Field(() => DrumTypeInput)
  drumType: DrumTypeInput
}

@InputType()
class UpdateDrumInput extends FillObject {
  @Field()
  @IsUUID()
  drumId: string

  @Field(() => PartialDrumTypeInput)
  drumType: PartialDrumTypeInput
}

@Resolver()
export class DrumsResolver {
  @Query(() => DrumEntity, { nullable: true })
  @UseMiddleware(isAuth)
  drum(@Arg('drumId') drumId: string) {
    const drumRepository = getRepository(DrumEntity)
    return drumRepository.findOne(drumId);
  }

  @Mutation(() => DrumEntity, { nullable: true })
  @UseMiddleware(isArgsValid, isAuth)
  async createDrum(@Arg("data") data: CreateDrumInput, @Ctx() context: MyContext) {
    const drumRepository = getRepository(DrumEntity)
    const userId = context.req.session.userId;
    const drum = await drumRepository.save({
      drumType: data.drumType,
      ownerId: userId
    })
    return drum
  }

  @Mutation(() => DrumEntity, { nullable: true })
  @UseMiddleware(isArgsValid)
  async updateDrum(@Arg("data") data: UpdateDrumInput, @Ctx() context: MyContext) {
    const drumRepository = getRepository(DrumEntity)
    const userId = context.req.session.userId;
    const drum = await drumRepository.save({
      id: data.drumId,
      drumType: data.drumType,
      ownerId: userId
    })

    return drum
  }
}

