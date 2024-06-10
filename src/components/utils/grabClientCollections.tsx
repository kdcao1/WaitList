import { getCookie } from "cookies-next"

export function grabClientCollections(collection: string) {
    const name = getCookie('nameClient');
    const collectionName = `${name}_${collection}`
    return collectionName
}