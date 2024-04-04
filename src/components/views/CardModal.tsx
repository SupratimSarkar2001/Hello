"use client"
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CardModal() {
 const router = useRouter();
 const params = useParams();
 const handleBackdropClick=()=> {
  router.back();
 }

 return (
  <>
  <div
    className="fixed inset-0 bg-black/70 z-10"
  >
  </div>
  <div className="absolute inset-0 z-20 w-full" onClick={handleBackdropClick}>
    <div className="">
      <div
        className="bg-white max-w-sm my-8 px-4 p-1 mx-auto rounded-md">
        <div onClick={ev => ev.stopPropagation()}>
          Card Test
        </div>

      </div>
      <div>&nbsp;</div>
    </div>
  </div>
</>
 )
}