import { object, string, email } from 'zod'

export const addScheme = object({
    name: string().regex(/^[A-Za-z\u0600-\u06FF ]+$/),
    phone: string().regex(/^\+?[0-9]{6,15}$/),
    email: email().optional(),
    password: string().min(8),
    location: string()
})