import Board from "@/components/Board";
import LoginView from "@/components/views/LoginView";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if(!session){
    return(
      <LoginView/>
    )
  }

  return (
    <div>
      <Board/>
    </div>
  );
}
