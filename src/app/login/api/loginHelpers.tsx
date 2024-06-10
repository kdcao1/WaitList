import { pb } from '@/components/utils/pocketbase';
import { setCookie } from 'cookies-next';
import { setCookies } from './cookie';

export const loginUser = async (values:any) => {
  try {
    const authData = await pb.collection('users').authWithPassword(((values.username)as string).toLowerCase(), values.password);
    const thirtyDay = 24 * 60 * 60 * 1000 * 30;
    setCookies(authData.record.name, authData.record.Chefs);
    
    setCookie('nameClient', authData.record.name, {
      //httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: thirtyDay,
    });


    return {success: true}
  } catch (error) {
    console.log(error)
    return {success: false}
  }
};

export function getUser() {
  return pb.authStore.model
}