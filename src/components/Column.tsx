import { ReactSortable } from "react-sortablejs"
import { Card, useMutation, useStorage } from "@/app/liveblocks.config"
import { shallow } from "@liveblocks/client"
import NewCardForm from "./forms/NewCardForm"

type ColumnProps = {
  id: string
  name: string
}
export default function Column({ id, name }: ColumnProps) {

  const columnCards = useStorage<Card[]>(root => {
    return root.cards.filter(card => card.columnId === id).map(c=>({...c}))
  }, shallow)

  const updateCard = useMutation(({storage}, index, updateData) => {
    const card = storage.get('cards').get(index);
    if (card) {
      for (let key in updateData) {
        card?.set(key as keyof Card, updateData[key]);
      }
    }
  }, [])

  const setCardsForColumn = (sortedCards: Card[], newColumnId: string) => {

  }

  return (
    <div className="w-48 bg-white shadow-sm rounded-md p-2">
      <h3>{name}</h3>
      {columnCards &&
        <ReactSortable list={columnCards}
          setList={cards => setCardsForColumn(cards, id)}
          group="cards"
          className="min-h-12"
          ghostClass="opacity-40"
        >
          {columnCards.map(card => (
            <div key={card.id} className="border bg-white my-2 p-4 rounded-md">
              <span>{card.name}</span>
            </div>
          ))}
        </ReactSortable>
      }
      <NewCardForm columnId={id} />
    </div>
  )
}