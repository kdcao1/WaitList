import { pb } from "../utils/pocketbase"

export const handleCancel = async(collectionId:any, id:any, name:string) => {
    const record = await pb.collection(collectionId).update(id,{
        'Status' : 'Canceled',
        'Canceled_by_who' : name,
    });
}