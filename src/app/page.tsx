import LoginView from "@/components/views/LoginView";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Boards from "@/components/Boards";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if(!session){
    return(
      <LoginView/>
    )
  }

  return (
    <div>
      <h1 className="text-4xl mb-4">Have a nice day 👋</h1>
      <Boards/>
      <div className="mt-4">
        <Link
          className="btn primary inline-flex gap-2"
          href={'/new-board'}>
          Create new board <FontAwesomeIcon className="h-6" icon={faArrowRight}/>
        </Link>
      </div>
    </div>
  );
}
