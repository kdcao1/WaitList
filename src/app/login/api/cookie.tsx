'use server'
import { cookies } from "next/headers"

export async function setCookies(name:any, chefs:any) {
    try {
        const thirtyDay = 24 * 60 * 60 * 1000 * 30;
        cookies().set({
            name: 'name',
            value: name,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: thirtyDay,
        })
        //console.log('cookies!')
    } catch (error) {
        console.log(error)
    }
}