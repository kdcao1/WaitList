'use server'

import { cookies } from "next/headers"

export async function dateCookie(token:any) {
    try {
        cookies().set({
            name: 'filterDate',
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

export async function clearFilter() {
    try {
        cookies().delete('filterDate')
        //console.log('cookies!')
    } catch (error) {
        console.log(error)
    }
}