import { pb } from "@/components/utils/pocketbase";

export async function updateChef(chefs:number, userId:any) {
    //console.log(userId.toString())
    const record = await pb.collection('users').getFirstListItem(`name = "${userId}"`)
    //console.log(record)
    await pb.collection('users').update(record.id, {Chefs: chefs});
}