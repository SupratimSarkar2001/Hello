"use client"
import { RoomProvider } from "@/app/liveblocks.config";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import Columns from "./Columns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { updateBoard } from "@/app/actions/boardAction";
import { BoardContextProvider } from "./BoardContext";

export default function Board({ id, name }: { id: string, name: string }) {
   const [renameMode, setRenameMode] = useState(false);
   const router = useRouter();
   const handleNameSubmit = async (ev: FormEvent) => {
      ev.preventDefault();
      const input = (ev.target as HTMLFormElement).querySelector('input');
      if (input) {
         const newName = input.value
         await updateBoard(id, { metadata: { boardName: newName } });
         input.value = ''
         setRenameMode(false)
         router.refresh()
      }
   }

   return (
      <BoardContextProvider>
         <RoomProvider
            id={id}
            initialPresence={{}}
            initialStorage={{
               columns: new LiveList(),
               cards: new LiveList(),
            }}>
            <ClientSideSuspense fallback={<div>Loading...</div>}>
               {() => (
                  <>
                     <div className="flex gap-2 justify-between items-center mb-4">
                        <div>
                           {
                              renameMode ? (
                                 <form onSubmit={handleNameSubmit}>
                                    <input type="text" defaultValue={name} />
                                 </form>
                              ) : (
                                 <h1 className="text-2xl"
                                    onClick={() => setRenameMode(true)}>
                                    Board: {name}
                                 </h1>
                              )
                           }
                        </div>
                        <Link
                           className="flex gap-2 items-center btn"
                           href={`/boards/${id}/settings`}>
                           <FontAwesomeIcon icon={faCog} />
                           Board settings
                        </Link>
                     </div>
                     <Columns />
                  </>
               )}
            </ClientSideSuspense>
         </RoomProvider>
      </BoardContextProvider>
   );
}