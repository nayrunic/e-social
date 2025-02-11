import type { Answer, Question } from "@/types/types";
import { QuestionComponent } from "./Question";

import "@/styles/global.css";

type Props = {
    page: Question[];
    onAnswerChange: (questionId: number, value: string) => void;
    savedAnswers: Answer;
    type: string;
}


export function SurveyPage({page, onAnswerChange, savedAnswers, type}: Props) { 

    return (page.map(({text, id}, index) => ( 
                <QuestionComponent 
                text={text} 
                index={id} 
                key={index}
                onAnswerChange={onAnswerChange}
                savedAnswers={savedAnswers}
                type={type}
                /> 
             ))); 


}