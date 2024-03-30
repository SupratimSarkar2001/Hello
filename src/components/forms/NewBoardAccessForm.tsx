'use client'

import { addEmailToBoard } from "@/app/actions/boardAction";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function NewBoardAccess({boardId}:{boardId:string}) {
 const router = useRouter();
 const inputRef = useRef<HTMLInputElement>(null);
 const addEmail =async (formData : FormData)=>{
  const email = formData.get('email')?.toString() || '';
  await addEmailToBoard(boardId,email);
  if(inputRef.current) inputRef.current.value = '';
  router.refresh();
 }

 return (
  <form action={addEmail} className="max-w-xs">
   <h2 className="text-lg mb-2">Add Email</h2>
   <input type="text" name="email" placeholder="supratim@example.com" />
   <button type="submit" className="w-full mt-2">Save</button>
  </form>
 )
}