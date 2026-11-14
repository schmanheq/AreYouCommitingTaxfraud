import { supabase } from "../subapaseclient"

export default function GameOver({score} : {score:number}){
    const gameover_pic1 = supabase.storage.from("Question_images").getPublicUrl('HonestCitizen.jpeg')
    const gameover_pic2 = supabase.storage.from("Question_images").getPublicUrl('ChasedByPolice.jpeg')
    const gameover_pic3 = supabase.storage.from("Question_images").getPublicUrl('cooked.jpeg')
    return(
        <div>

            {score==0 &&
             <div  className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
                  style={{ backgroundImage: `url('${gameover_pic1.data.publicUrl}')` }}>

                    <div className="flex flex-col items-center mb-8 p-8 bg-white/90 border-4 border-black rounded-2xl text-2xl md:text-3xl font-bold shadow-[8px_8px_0px_#000]">
                              <div className="px-4 py-1 mb-5 bg-yellow-300 border-2 border-black rounded-full text-base md:text-2xl font-black uppercase tracking-wider shadow-[3px_3px_0px_#000]">
                                Your Results:</div>
                            <div>Congratulation youre the perfect citizen, but youre also kinda lame.</div>
                    </div>
            </div>
            }
            {score<6 && score>0 &&
               <div  className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
                  style={{ backgroundImage: `url('${gameover_pic2.data.publicUrl}')` }}>

                    <div className="flex flex-col items-center mb-8 p-8 bg-white/90 border-4 border-black rounded-2xl text-2xl md:text-3xl font-bold shadow-[8px_8px_0px_#000]">
                        <div className="px-4 py-1 mb-5 bg-yellow-300 border-2 border-black rounded-full text-base md:text-2xl font-black uppercase tracking-wider shadow-[3px_3px_0px_#000]">
                        Your Results:</div>
                        <div>The taxoffice is onto you.</div>
                        <button
                        className="inline-block px-6 py-3 my-5
                                    bg-red-400 
                                    border-4 border-black rounded-2xl 
                                    shadow-[6px_6px_0px_#000] 
                                    text-xl font-black text-white uppercase tracking-wider
                                    transition-all duration-200 ease-bounce 
                                    hover:rotate-0 hover:scale-105 hover:bg-red-600
                                    active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                        onClick={()=>{window.location.href="https://www.irs.gov/filing/individuals/how-to-file"}}>
                            Click this link to get rid of your sins
                        </button>
                    </div>
            </div>
            }
            {score>5 &&
               <div  className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
                  style={{ backgroundImage: `url('${gameover_pic3.data.publicUrl}')` }}>

                    <div className="flex flex-col items-center mb-8 p-8 bg-white/90 border-4 border-black rounded-2xl text-2xl md:text-3xl font-bold shadow-[8px_8px_0px_#000]">
                        <div className="px-4 py-1 mb-5 bg-yellow-300 border-2 border-black rounded-full text-base md:text-2xl font-black uppercase tracking-wider shadow-[3px_3px_0px_#000]">
                        Your Results:</div>
                        <div>Youre sharing the cell with diddy and epstein </div>
                        <button
                        className="inline-block px-6 py-3 my-5
                                    bg-red-400 
                                    border-4 border-black rounded-2xl 
                                    shadow-[6px_6px_0px_#000] 
                                    text-xl font-black text-white uppercase tracking-wider
                                    transition-all duration-200 ease-bounce 
                                    hover:rotate-0 hover:scale-105 hover:bg-red-600
                                    active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                        onClick={()=>{window.location.href="https://www.federalprisontime.com/self-surrender-checklist"}}>
                        Report to the Police and book your cell</button>
                    </div>
            </div>
            }
        </div>
    
    )
}