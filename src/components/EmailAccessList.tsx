import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EmailAccessList({ emails }: { emails: string[] }) {
 return (
  <div className="max-w-xs">
   {emails.map((email) =>
    <div className="flex gap-2 my-4 items-center max-w-xs justify-between border rounded-lg pl-4">
     {email}
     <button className="btn p-1">
      <FontAwesomeIcon icon={faTrash} />
     </button>
    </div>)}
  </div>
 )
}