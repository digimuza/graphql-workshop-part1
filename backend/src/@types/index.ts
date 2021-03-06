import { PrismaClient } from "@prisma/client";

export interface AppContext {
    prisma: PrismaClient
    userId: number
    req: Request,
    res: Response
}