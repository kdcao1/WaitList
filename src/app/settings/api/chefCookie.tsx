'use server'

import { cookies } from "next/headers"

export async function chefCookie(token:any) {
    try {
        const thirtyDay = 24 * 60 * 60 * 1000 * 30
        cookies().set({
            name: 'chefs',
            value: token,
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

export async function getChefCookie() {
    try {
        return cookies().get('chefs')?.value
        //console.log('cookies!')
    } catch (error) {
        console.log(error)
    }
}
