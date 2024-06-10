import { cookies } from "next/headers"

export function grabCollections(collection:string) {
    const cookieStore = cookies()
    const name = cookieStore.get('name')?.value
    const collectionName = `${name}_${collection}`
    return collectionName
}