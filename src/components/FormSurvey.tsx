import type { Question } from "@/types/types";
import { useState } from "react";

type Props = {
    questions: Question[];
}

export const FormSurvey = ({ questions }: Props) => { 

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNext = () => { 
        if(currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    return (
        <div className="container mx-auto p-4 flex justify-center"> 
            <div className="bg-white rounded-lg shadow-md p-6 ">
                <h2 className="text-xl font-bold mb-4">IRI</h2> 
                <div className=" flex flex-col"> 
                    {
                        questions.map((pregunta, index) => (
                            <div className="flex flex-col md:flex-row rounded-md p-4 pb-0 md:justify-items-center border md:border-0 mb-3 md:mb-0" key={index}>
                                <p className="text-xs font-semibold pt-5 md:border-r md:border-t md:w-2/3 pb-2 md:pb-0">{pregunta.text}</p>
                                <div className="">
                                    <div className="flex items-center justify-between md:space-x-4 border-t pt-2 pl-2"> 
                                        <div className="flex items-center space-x-2 ">
                                            <input type="radio" name="q1" id="q1-1" className="mr-1"/>
                                            <label>1</label>
                                        </div>
                                        <div className="flex items-center space-x-2 ">
                                            <input type="radio" name="q1" id="q1-2" className="mr-1"/>
                                            <label>2</label>
                                        </div>
                                        <div className="flex items-center space-x-2 ">
                                            <input type="radio" name="q1" id="q1-3" className="mr-1"/>
                                            <label>3</label>
                                        </div>
                                        <div className="flex items-center space-x-2 ">
                                            <input type="radio" name="q1" id="q1-4" className="mr-1"/>
                                            <label>4</label>
                                        </div>
                                        <div className="flex items-center space-x-2 ">
                                            <input type="radio" name="q1" id="q1-5" className="mr-1"/>
                                            <label>5</label>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        ))
                    }
                    <div className="flex justify-evenly">
                        <button onClick={handleNext} 
                                className="w-28 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center">
                                    Siguiente
                        </button>
                        {
                            currentQuestion > 0 && 
                            <button onClick={() => setCurrentQuestion(currentQuestion - 1)} 
                                    className="w-28 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center">
                                        Anterior
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}