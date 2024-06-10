import PocketBase from 'pocketbase';

export const pb = new PocketBase('pocketbase url');

pb.autoCancellation(false);
