import { Router } from "express";
import { addDistributor, getDistributors } from "../../controllers/entities/distributors.controller";

export const distributors = Router()

distributors.post("/add", addDistributor)
distributors.get("/", getDistributors)