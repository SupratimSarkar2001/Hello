'use client'
import { useMutation } from "@/app/liveblocks.config"
import { LiveObject } from "@liveblocks/client";
import { FormEvent } from "react"
import uniqid from 'uniqid';

export default function NewColumnForm() {
 const addColumn = useMutation(({storage},columnName)=>{
   return storage.get("columns").push(new LiveObject({
    name: columnName,
    id: uniqid.time(),
    index:9999,
   }));
 },[]);

 const handleNewColumn = (event :FormEvent)=>{
  event.preventDefault()

  const input = (event.target as HTMLInputElement).querySelector('input');

  if(input){
    const columnName = input.value
    addColumn(columnName);
    input.value = '' 
  }
  
 }
 return (
  <form onSubmit={handleNewColumn} className="max-w-xs">
   <label className="block">
    <span className="text-gray-600 block">Column name</span>
    <input type="text" name="column-name" />
   </label>
   <button type="submit" className="mt-2 block w-full">Create Column</button>
  </form>
 )
}