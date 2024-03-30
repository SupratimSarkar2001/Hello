'use server';

import Board from "@/components/Board";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { getUserEmail } from "@/lib/userClient";

type PageProps ={
 params: {
  boardId: string
 }
}


export default async function BoardPage(props : PageProps) {
 const boardId = props.params.boardId;
 const userEmail = await getUserEmail();
 const boardInfo = await liveblocksClient.getRoom(boardId);
 const userAccess = boardInfo.usersAccesses?.[userEmail];
 const hasAccess = userAccess && [...userAccess].includes('room:write')

 if(!hasAccess){
  return(
   <div className="text-center text-3xl">😔 You don't have access to this board</div>
  )
 }
 return (
  <div> 
   <Board name={boardInfo.metadata.boardName.toString()} id={boardId}/>
  </div>
  )
}