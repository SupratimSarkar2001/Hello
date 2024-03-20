'use client'
import { FormEvent } from "react"

export default function NewColumnForm() {
 const handleNewColumn = (event :FormEvent)=>{
  event.preventDefault()

  const input = (event.target as HTMLInputElement).querySelector('input');

  if(input){
   alert(input.value)
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