'use server'

import { cookies } from "next/headers"

export async function typeCookie(token:any) {
    try {
        cookies().set({
            name: 'historyType',
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

export async function historyCookie(token:any) {
    try {
        cookies().set({
            name: 'historyFilter',
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

export async function clearHistoryFilter() {
    try {
        cookies().delete('historyFilter')
        //console.log('cookies!')
    } catch (error) {
        console.log(error)
    }
}

export async function clearHistoryType() {
    try {
        cookies().delete('historyType')
        //console.log('cookies!')
    } catch (error) {
        console.log(error)
    }
}