'use server'
import { pb } from "./pocketbase";

export const addData = async(values:any, collection: string) => {
    const add = await pb.collection(collection).create(values)
};

export const updateData = async(values:any, collectionId: any, id: any) => {
    const add = await pb.collection(collectionId).update(id, values)
};

