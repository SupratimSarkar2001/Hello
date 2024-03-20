"use client"
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";

const columns = [
   { id: "wghgs", name: "todo", index: 0 },
   { id: "hjshj", name: "doing", index: 1 },
   { id: "nhsdn", name: "done", index: 2 },
]

export type CardType = {
   name: String;
   id: String;
   order: Number;
}

const cards = [
   { id: "1ghj", name: "card 1", order: 0 , columnId: "wghgs"},
   { id: "2ghj", name: "card 2", order: 1 , columnId: "hjshj"},
   { id: "3ghj", name: "card 3", order: 2 , columnId: "nhsdn"},
]
export default function Board() {
   return (
      <div className="flex gap-4">
         {
            columns.map(column => (
              <Column {... column} 
              cards = {cards.filter(card => card.columnId === column.id)} 
              key={column.id} />
            ))
         }
         <NewColumnForm />
      </div>
   );
}