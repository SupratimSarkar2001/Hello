'use server'

import EmailAccessList from "@/components/EmailAccessList";
import NewBoardAccess from "@/components/forms/NewBoardAccessForm";
import { liveblocksClient } from "@/lib/liveblocksClient";
import { getUserEmail } from "@/lib/userClient";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type PageProps = {
  params: {
    boardId: string;
  }
}
export default async function BoardSettings({ params }: PageProps) {
  const { boardId } = params;
  const boardInfo = await liveblocksClient.getRoom(boardId);
  const userEmail = await getUserEmail();
  if(!boardInfo.usersAccesses?.[userEmail]) {
    return (
      <div>
        <h1 className="text-center text-3xl">😔 You don't have access to this board</h1>
      </div>
    )
  }
  return (
    <div>
      <Link className="inline-flex gap-1 items-center btn mb-4"
        href={`/boards/${boardId}`}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Go back to board
      </Link>
      <h1 className="text-2xl">Access to board {boardInfo.metadata.boardName.toString()}:</h1>
      <div className="mb-8">
         <EmailAccessList
          emails={Object.keys(boardInfo.usersAccesses)}
          />
      </div>
      <NewBoardAccess boardId={boardId} />
    </div>
  )
}