import { Router } from "express";
import { addDistributor } from "../../controllers/entities/distributors.controller";

export const distributors = Router()

distributors.post("/add", addDistributor)