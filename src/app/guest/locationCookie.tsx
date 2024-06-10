'use server'
import { cookies } from "next/headers"

export async function locationCookie(token:any) {
    try {
        cookies().set({
            name: 'location',
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
          })
        //console.log('cookies!')
    } catch (error) {
        console.log(error)
    }
}