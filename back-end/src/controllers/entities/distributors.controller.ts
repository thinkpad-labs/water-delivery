import type { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { addScheme } from "../../zod/Distributors.zod";
import { db } from "../../db/dbClient";
import { distributorsTable, usersTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const addDistributor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const validBody = addScheme.safeParse(req.body)
        if (!validBody.success) {
            console.error("Issue in 'addDistributor' req.body", validBody.error.flatten())
            return res.status(400).json({ code: "BAD_REQUEST" })
        }
        const { name, email, phone, location, password } = validBody.data
        const hashedPass = await bcrypt.hash(password, 10)
        const [{ id }] = await db.insert(usersTable).values({ name, email, phone, password: hashedPass, location }).returning({ id: usersTable.id })
        await db.insert(distributorsTable).values({ userId: id, status: "not_in_operation" })
        return res.status(201).json({ code: "DISTRIBUTOR_CREATED" })
    } catch (error) {
        console.error("Couldn't add distributor due to a server error:", error)
        return res.status(500).json({ code: "SERVER_ERROR" })
    }
}

export const getDistributors = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await db.select().from(distributorsTable).leftJoin(usersTable, eq(distributorsTable.userId, usersTable.id))
        const registeredDistributors = result.map(({ distributors, users }) => ({
            id: distributors.id,
            name: users?.name,
            storeName: distributors.storeName,
            status: distributors.status,
            dues: distributors.dues
        }))
        return res.status(200).json(registeredDistributors)
    } catch (error) {
        console.log("Couldn't fetch distributors due to a server error:\n", error)
        return res.status(500).json({ code: "SERVER_ERROR" })
    }
}