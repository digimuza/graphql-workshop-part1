import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { AppContext } from '../@types/index';

// ObjectType
@ObjectType()
class ReturnObject {
    @Field()
    id: string

    @Field()
    name: string
}

// InputType
@Resolver()
export class HelloWorldResolver {
    @Query(() => String)
    helloWorld() {
        return "hello world"
    }

    @Mutation(() => String)
    myNameIs() {
        return "Andrius"
    }

    @Mutation(() => String)
    mutationWithArgs(@Arg('name') name: string) {
        return name
    }

    @Query(() => String)
    helloWorldWithArgs(@Arg('name') name: string) {
        return `hello world ${name}`
    }

    @Query(() => ReturnObject)
    sampleEndpoint() {
        const obj = Object.assign(new ReturnObject(), { id: "123", name: "Petriukas" })
        return obj
    }
}

