"use client"
import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";
import { RoomProvider } from "@/app/liveblocks.config";

const defaultColumns = [
   { id: "col1", name: "todo", index: 0 },
   { id: "col2", name: "doing", index: 1 },
   { id: "col3", name: "done", index: 2 },
]

export type CardType = {
   name: string;
   id: string | number;
   index: number;
   columnId: string
}

const defaultCards = [
   { id: "1ghj", name: "card 1", index: 0, columnId: "col1" },
   { id: "4dhj", name: "card 4", index: 3, columnId: "col1" },
   { id: "2ghj", name: "card 2", index: 1, columnId: "col2" },
   { id: "3ghj", name: "card 3", index: 2, columnId: "col3" },
]
export default function Board({ id }: { id: string }) {
   const [cards, setCards] = useState(defaultCards)
   const [columns, setColumns] = useState(defaultColumns)
   return (
      <RoomProvider
         id={id}
         initialPresence={{}}
         initialStorage={{}}>
         <div className="flex gap-4">
            {
               columns.map(column => (
                  <Column {...column}
                     setCards={setCards}
                     cards={cards.
                        sort((a, b) => a.index - b.index).
                        filter(card => card.columnId === column.id)}
                     key={column.id} />
               ))
            }
            <NewColumnForm />
         </div>
      </RoomProvider>

   );
}