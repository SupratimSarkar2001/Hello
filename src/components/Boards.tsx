'use server';

import {liveblocksClient} from "@/lib/liveblocksClient";
import {getUserEmail} from "@/lib/userClient";
import Link from "next/link";

export default async function Boards() {
  const email = await getUserEmail();
  const {data:rooms} = await liveblocksClient.getRooms({userId: email});
  return (
    <div className="my-4 grid md:grid-cols-4 gap-4">
     {
      rooms?.length > 0 && rooms.map(room => (
       <Link
       href={`/boards/${room.id}`}
       key={room.id}
       className="bg-gray-300 py-4 p-4 my-2 rounded-md"
       >
        {room.metadata.boardName}
       </Link>
      )) 
     }
    </div>
  );
}