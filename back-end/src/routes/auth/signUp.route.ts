import { Router } from "express";

const logIn = Router()

logIn.post("/google-auth", googleAuth)
