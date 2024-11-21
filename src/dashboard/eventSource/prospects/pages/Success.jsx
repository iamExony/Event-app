import { Link } from "react-router-dom"
import { Continue } from "../../../components/Buttons"

const Success = () => {
  return (
    <div className="h-[100vh] flex flex-col">
        <div className="grid place-items-center">
            <img 
                src="/images/dashboard/congrats.png"
                alt="congrats" 
                className="w-[60%]" 
            />
        </div>

        <Link 
            to="/account/prospects/all-prospects" 
            className="w-full grid place-items-center"
        >
            <Continue className="py-4 px-10 text-xl">
                View all prospects
            </Continue>
        </Link>
    </div>
  )
}

export default Success