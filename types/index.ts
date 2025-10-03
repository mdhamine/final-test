import type { ObjectId } from 'mongoose'
import type { JWTPayload } from 'jose'

export interface AuthPayload extends JWTPayload {
    email?: string
}

export interface User {
    _id?: ObjectId,
    email: string,
    phone: string,
    firstName: string,
    lastName: string,
    age: number,
    country: string,
    courses: []
};
