'use client'

import { Card, useMutation } from "@/app/liveblocks.config";
import { LiveObject } from "@liveblocks/client";
import { FormEvent } from "react";
import uniqid from "uniqid";

export default function NewCardForm({ columnId }: { columnId: string }) {

 const addCard = useMutation(({storage}, cardName) => {
  return storage.get('cards').push(new LiveObject<Card>({
    name: cardName,
    id: uniqid.time(),
    columnId: columnId,
    index: 9999,
  }))
}, [columnId]);

 const handleNewCardFormSubmit =(event: FormEvent)=>{
  event.preventDefault()
  const input = (event.target as HTMLInputElement).querySelector('input');

  if(input){
    const cardName = input.value
    addCard(cardName)
    input.value = ''
  }
 }
 
 return(
  <form onSubmit={handleNewCardFormSubmit}>
   <input type="text" placeholder="New Card Name"/>
  </form>
 )
}