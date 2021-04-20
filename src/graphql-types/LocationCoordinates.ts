import { IsNotEmpty, Max, Min } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class LocationCoordinates {
    @IsNotEmpty()
    @Max(90)
    @Min(-90)
    @Field()
    public latitude: number;

    @IsNotEmpty()
    @Max(180)
    @Min(-180)
    @Field()
    public longitude: number;
}
