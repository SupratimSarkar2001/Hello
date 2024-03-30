"use client"
import { RoomProvider } from "@/app/liveblocks.config";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import Columns from "./Columns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Board({ id, name }: { id: string, name: string }) {
   return (
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
                        <h1 className="text-2xl">Board: {name}</h1>
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

   );
}