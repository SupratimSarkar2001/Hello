"use server"

import { authOptions } from "@/lib/authOptions";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { Liveblocks, RoomInfo } from "@liveblocks/node";
import { getServerSession } from "next-auth";
import uniqid from 'uniqid';

export async function createBoard(name: string): Promise<false | RoomInfo> {
 const liveblocksClient = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY || '',
 });

 const session = await getServerSession(authOptions);
 const email = session?.user?.email || '';

 if (email) {
  const roomId = uniqid.time();

  return await liveblocksClient.createRoom(roomId, {
   defaultAccesses: [],
   usersAccesses: {
    [email]: ['room:write'],
   },
   metadata: {
    boardName: name,
   },
  })
 }
 return false
}

export async function addEmailToBoard(boardId:string, email:string) {
 const room = await liveblocksClient.getRoom(boardId);
 const usersAccesses = room.usersAccesses;
 usersAccesses[email] = ['room:write']; 
 await liveblocksClient.updateRoom(boardId, {usersAccesses});
 return true;
}