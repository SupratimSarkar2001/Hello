import { useStorage } from "@/app/liveblocks.config";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";

export default function Columns() {
 const columns = useStorage(root => root.columns);
 if(!columns) return ;
 return (
  <div className="flex gap-4">
   {
    columns?.length > 0 &&
    columns.map(column => (
     <Column {...column}
      key={column.id} />
    ))
   }
   <NewColumnForm />
  </div>
 )
}