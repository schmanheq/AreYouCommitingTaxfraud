import { useState } from "react";

interface SliderProps {
  options: string[];
  onSubmit: (answer:number)=>void 
}

export default function Slider({options, onSubmit}:SliderProps){
    const [slidervalue, SetSlidervalue] = useState<number|"">(0);
    const min = Number(options[0])
    const max = Number(options[1])

    const getCommentOnInput = (val: number) => {
    if (val === 0) return "Nah trust me Bro.";
    if (val <= 1000) return "You good, Buddy.";
    if (val <= 10000) return "Ok, that could be a problem.";
    if (val <= 50000) return "You're gettin the cell next to epstein."

    return "Yea suuuuuuure there buddy"; 
    };

 

    return (
        <div className="flex flex-col items-center p-2 mb-10 bg-purple-400/90 border-4 border-black rounded-2xl shadow-[8px_8px_0px_#000] max-w-lg w-full">
    
            {/* Slider Labels */}
            <div className="flex w-full justify-between items-center mb-6 font-black uppercase ">
                <span className="text-2xl text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                    {min}€
                </span>
                
                <div className="flex flex-col items-center">
                    <input 
                        type="number" 
                        min={min}
                        max={max}
                        value={slidervalue}
                        onChange={(e) => {
                            const val = e.target.value;
                            SetSlidervalue(val === "" ? "" : Number(val));
                        }}
                        className="font-bold text-xl w-24 text-center border-4 border-white bg-white rounded p-1"
                        />
                </div>
                
                <span className="text-2xl text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                    {max}€
                </span>
            </div>

            <input 
                type="range" 
                min={min} 
                max={max} 
                value={slidervalue}
                onChange={(e) => SetSlidervalue(Number(e.target.value))}
                className="
                    w-full h-6 mb-6 
                    bg-white border-4 border-black rounded-full 
                    appearance-none cursor-pointer outline-none
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-10 
                    [&::-webkit-slider-thumb]:h-10 
                    [&::-webkit-slider-thumb]:bg-yellow-400 
                    [&::-webkit-slider-thumb]:border-4 
                    [&::-webkit-slider-thumb]:border-black 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:shadow-[4px_4px_0px_#000]
                    [&::-webkit-slider-thumb]:transition-transform
                    hover:[&::-webkit-slider-thumb]:scale-110
                "
            />

            {/* Submit Button */}
            <div className="flex justify-center my-6">
                <button className="
                    inline-block px-6 py-3 
                    bg-pink-400 
                    border-4 border-black rounded-2xl 
                    shadow-[6px_6px_0px_#000] 
                    transform -rotate-2 
                    text-xl font-black text-white uppercase tracking-wider
                    transition-all duration-200 ease-bounce 
                    hover:rotate-0 hover:scale-105
                    active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
                "
                onClick={()=>onSubmit(1)}
                >
                    {getCommentOnInput(Number(slidervalue))}
                </button>
            </div>
        </div>
    )

}