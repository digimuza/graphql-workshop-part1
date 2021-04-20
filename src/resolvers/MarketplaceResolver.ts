import { Arg, Field, InputType, Query, Resolver, UseMiddleware, Int, Mutation } from 'type-graphql';
import { getRepository } from 'typeorm';
import { MarketplaceEntity, MarketplacePayload } from '../entity/MarketplaceEntity';
import { isAuth } from '../middleware/isAuth';

@InputType()
class CreateMarketplaceInput implements MarketplacePayload {
    @Field(() => Int, { nullable: true })
    gracePeriodInDays?: number;

    @Field(() => Boolean, { nullable: true })
    isLast?: boolean

    @Field(() => Int, { nullable: true })
    minimumRentPeriodInMonths?: number;

    @Field(() => Int, { nullable: true })
    reservationPeriodInDays?: number;

    @Field(() => String, { nullable: true })
    state?: string;
}

@Resolver(MarketplaceEntity)
export class MarketplaceResolver {
    @Query(() => MarketplaceEntity, { nullable: true })
    @UseMiddleware(isAuth)
    getMarketplace(@Arg("marketplaceId") marketplaceId: string) {
        const companyRepository = getRepository(MarketplaceEntity)
        return companyRepository.findOne(marketplaceId);
    }

    @Mutation(() => MarketplaceEntity, { nullable: true })
    @UseMiddleware(isAuth)
    createMarketplace(@Arg("data") data: CreateMarketplaceInput) {
        const companyRepository = getRepository(MarketplaceEntity)
        return companyRepository.create(data);
    }
}



