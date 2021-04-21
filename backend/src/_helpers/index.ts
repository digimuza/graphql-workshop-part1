import { GraphQLScalarType, GraphQLError } from "graphql";
import { ClassType, ObjectType, Field, Int, Arg, Query, Resolver } from "type-graphql";
import { validate, ValidationError } from 'class-validator';
import { BaseEntity, getRepository } from 'typeorm';

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;


export abstract class BaseArgument {
    async validate() {
        const errors = await validate(this)
        return errors
    }
}

export class FillObject {
    fill(data: NonFunctionProperties<this>): this {
        return Object.assign(this, data)
    }
}

export class ResponseError extends FillObject {
    message: string
}

export function createBaseResponse<TItemsFieldValue>(itemsFieldValue: ClassType<TItemsFieldValue> | GraphQLScalarType | String | Number | Boolean) {
    @ObjectType()
    class Response {
        @Field(() => [GraphQLError], { nullable: true })
        errors?: ResponseError[]

        @Field(() => Int)
        status: number

        @Field(() => itemsFieldValue, { nullable: true })
        data?: TItemsFieldValue

        static ok(data?: TItemsFieldValue) {
            const response = new Response()
            response.data = data
            response.status = 200
            return response
        }

        static error(data: { errors: ResponseError[], status?: number }) {
            const { status = 500, errors } = data
            const response = new Response()
            response.errors = errors
            response.status = status
            return response
        }
    }
    return Response;
}

export function processValidationErrors(errors: ValidationError[]): ResponseError[] {
    return errors.map((err) => new ResponseError().fill({ message: err.toString() }));
}