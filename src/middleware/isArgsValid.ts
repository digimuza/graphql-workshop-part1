import { MyContext } from "../graphql-types/MyContext";
import { BaseArgument } from "../_helpers";
import { MiddlewareFn } from "type-graphql";

export const isArgsValid: MiddlewareFn<MyContext> = async ({ args }, next) => {
    const errors = await Promise.all(Object.values(args).flatMap(async (q) => {
        if (q instanceof BaseArgument) {
            return q.validate()
        }

        return []
    }))

    if (errors.length !== 0) {
        throw errors
    }
    return next();
};