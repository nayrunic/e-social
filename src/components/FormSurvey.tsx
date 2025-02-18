import type { Answer, Question } from "@/types/types";
import { useState, type FormEvent } from "react";
import { paginate, isMobile } from "@/lib/utils";
import { useMultiPageSurvey } from "./hooks/useMultiPageSurvey";
import { SurveyPage } from "./PageSurvey";
import { isDialogOpen, setDialogData } from "@/store/store";
import { QUESTION_SIZES, REDIRECTS } from "@/lib/data";

import "@/styles/global.css";

type Props = {
    questions: Question[];
    type: string;
}


export const FormSurvey = ({ questions, type }: Props) => { 
    const isMobileDevice = isMobile();
    const size = isMobileDevice ? QUESTION_SIZES[type][0] : QUESTION_SIZES[type][1];

    const paginatedQuestions = paginate(questions, size);

    const [answers, setAnswers] = useState<Answer>({});	

    const handleAnswerChange = (questionId: number, value: string) => {  
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          [`${type}_${questionId}`]: value,
        }));
      };

    const { steps, currentPage, handleNext, handleBack, isLastStep, isFirstStep } = useMultiPageSurvey(
        paginatedQuestions.map((page, index) => 
                <SurveyPage page={page} 
                            key={index} 
                            onAnswerChange={handleAnswerChange} 
                            savedAnswers={answers}
                            type={type}
                />
        ));

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault(); 
        if (!isLastStep) return handleNext()
        
        const allAnswered = questions.every((question) => answers[`${type}_${question.id}`]!== undefined && answers[`${type}_${question.id}`]!== null);

        if (!allAnswered) {
            setDialogData({title: "Error", message: "Por favor responde a todas las preguntas."})
            isDialogOpen.set(true);
            return; 
        }  

        push();
    };

      const push = async () => {
        const res = await fetch('/api/surveys', {
            method: "POST",
            body: JSON.stringify({
              table: type,
              answers: { answers },
            })
          });
    
        const json = await res.json();
    
        const {message, table, error} = json;
    
        if(error){
            setDialogData({title: "Error", message: "Lo sentimos, hubo un error en el servidor, por favor vuelve a intentarlo."})
            isDialogOpen.set(true);
            return;
        }
    
        window.location.href = REDIRECTS[`${table}`];
      }

    return (
        <div className="container mx-auto p-4 flex justify-center mt-5"> 
            <div className="bg-white rounded-lg shadow-md p-6 xl:w-[1100px]">
                <div className="md:static sticky top-0 bg-white z-10">
                    {
                        type==="IRI" && (
                            <div className="flex w-full justify-around mb-4 p-4">
                                <div className="w-1/3 hidden lg:block"></div>
                                <div className="flex justify-between flex-1 gap-4 text-center">
                                    <p className="pl-2">1 - No me describe <br/> muy bien</p>
                                    <p>5 -Me describe <br/> bien</p>
                                </div>
                            </div>
                        )
                    }

                    {   
                        type==="MFQ_1" && (
                            <div className="flex justify-evenly w-full mb-4 p-4">
                                <div className="w-1/3 hidden lg:block"></div>
                                <div className="flex md:flex-row flex-col md:flex-1 items-center md:gap-6 gap-2 text-center text-xs">
                                    <p>0 - Para nada relevante</p>
                                    <p>1 - No muy relevante </p>
                                    <p>2 - Ligeramente relevante</p>
                                    <p>3 - Algo relevante</p>
                                    <p>4 - Muy relevante</p>
                                    <p>5 - Extremadamente relevante</p>
                                </div>
                            </div>
                        )
                    }

                    {
                        type==="MFQ_2" && (
                            <div className="flex justify-evenly w-full mb-4 p-4">
                                <div className="w-1/3 hidden lg:block"></div>
                                <div className="flex md:flex-row flex-col md:flex-1 md:gap-6 gap-2 items-center text-center text-xs">
                                    <p>0 - <b className="hidden md:block"/> Muy en desacuerdo</p>
                                    <p>1 - <br className="hidden md:block"/> Moderadamente en desacuerdo</p>
                                    <p>2 - <br className="hidden md:block"/> Ligeramente en desacuerdo</p>
                                    <p>3 - <br className="hidden md:block"/> Ligeramente de acuerdo</p>
                                    <p>4 - <br className="hidden md:block"/> Moderadamente de acuerdo</p>
                                    <p>5 - <br className="hidden md:block"/> Muy de acuerdo</p>
                                </div>
                            </div>
                        )
                    }
                </div>

                <form onSubmit={handleSubmit}>
                    {
                        steps[currentPage]
                    }
                    <div className="flex justify-center gap-4 pt-10">
                        <button onClick={handleBack} 
                                type="button"
                                disabled={isFirstStep}
                                className="px-4 py-2 bg-gray-200 rounded-3xl hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed">
                                    Anterior
                        </button>
                        <button type="submit"
                                className="px-4 py-2 bg-sky-300 text-white rounded-3xl hover:bg-sky-700">
                                    {isLastStep ? "Finalizar" : "Siguiente"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}