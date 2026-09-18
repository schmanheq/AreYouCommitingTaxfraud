import { useNavigate } from "react-router-dom"

export default function Starter(){
  const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-[url('/public/Entry.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
            <button 
            className=" text-9xl font-black text-white
                        bg-cyan-400/90 
                        border-4 border-black rounded-2xl 
                        shadow-[6px_6px_0px_#000] 
                        transition-all duration-150 ease-out 
                        hover:bg-cyan-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] 
                        active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
                        "
            onClick={()=>navigate('/game')}

            > Start Game</button>
        </div>
    )
}
