import { ReactSortable } from "react-sortablejs"
import { CardType } from "./Board"
import { SetStateAction } from "react"

type ColumnProps = {
 id: string
 name: string
 cards: CardType[]
 setCards: SetStateAction<any>;
}
export default function Column({id,name, cards,setCards}: ColumnProps) {

 const setCardsForColumn=(sortedCards: CardType[], newColumnId: string)=>{
  setCards((prevCards: CardType[])=>{
    const newCards= [... prevCards];
    sortedCards.forEach((sortedCard:CardType, newIndex: number) => {
      const foundCard = newCards.find(newCard => newCard.id === sortedCard.id);
      if(foundCard){
        foundCard.index = newIndex;
        foundCard.columnId = newColumnId;
      }
    })
    return newCards;
  })
 }
 
 return(
  <div className="w-48 bg-white shadow-sm rounded-md p-2">
   <h3>{name}</h3>
   <ReactSortable list={cards} 
   setList={cards => setCardsForColumn(cards,id)} 
   group="cards"
   className="h-full"
   ghostClass="opacity-40"
   >
   {cards.map(card => (
    <div key={card.id} className="border bg-white my-2 p-4 rounded-md">
     <span>{card.name}</span>
    </div>
   ))}
   </ReactSortable>
</div>
 )
}