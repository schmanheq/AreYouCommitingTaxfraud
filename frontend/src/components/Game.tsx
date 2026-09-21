import { useEffect, useState } from 'react';
import { supabase } from '../subapaseclient';
import Slider from './Slider';
import type { Database } from '../types/supabase';

type Question = Database['public']['Tables']['Questions']['Row'];


export default function Game(){

    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0)
    const bgcolorschemes = ["bg-orange-700","bg-blue-900","bg-rose-900"]
    var currentQuestion = questions[currentIndex]

    useEffect(() => {
      async function fetchQuestions() {
        try {
          setLoading(true);
          const { data, error } = await supabase
            .from('Questions')
            .select('*')
            .order("id")

          if (error) {
            throw error;
          }

          if (data) {
            setQuestions(data);
          }
        } catch (err: any) {
          setError(err.message);
          console.error("Error fetching questions:", err.message);
        } finally {
          setLoading(false);
        }
      }

      fetchQuestions();
    }, []);

    if (loading) return <div>Loading game...</div>;
    if (error) return <div>Error loading questions: {error}</div>;

    const handleSubmit = () => {
        setCurrentIndex((prevIndex)=>(prevIndex+1))
    };
    return (
        
        <div>
            {currentIndex<questions.length &&
            <div  className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
                  style={{ backgroundImage: `url('${currentQuestion.Image_url}')` }}>
                <h1 className="mb-4 p-2 text-3xl font-black text-yellow-400/90 bg-white/40 border-black rounded-md drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
                Question {currentIndex+1} of {questions.length}
                </h1>

                <div className="mb-8 p-8 bg-white/90 border-4 border-black rounded-2xl text-2xl md:text-3xl font-bold shadow-[8px_8px_0px_#000]">
                {currentQuestion.Question}
                </div>

                {/* Yes or No Questions */}
                {currentQuestion.answer_type=="yes_or_no" &&
                <div className='flex fex-row '>
                    {currentQuestion.options?.map((option,index)=>(
                        <button
                        key={index}
                        className={`
                            px-8 py-4 mx-1
                            ${bgcolorschemes[index]}
                            border-4 border-black rounded-2xl 
                            shadow-[6px_6px_0px_#000] 
                            text-2xl font-black text-white uppercase tracking-wider
                            transition-all duration-150 ease-out 
                            hover:bg-green-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] 
                            active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
                        `}
                        onClick={() => { setCurrentIndex((prevIndex) => (prevIndex + 1)) }}
                        >
                        {option}
                        </button>
                    ))}    
                </div>
                }

                {/* Slider Questions */}
                {currentQuestion.answer_type=="slider" &&
                <Slider 
                key={currentQuestion.id}
                options={currentQuestion.options ?? []}
                onSubmit={handleSubmit}
                />
                }

            </div>}

            {currentIndex==questions.length &&
            <div>
                <h1>Game Over</h1>
            </div>
            }
        </div>
    

    )
}