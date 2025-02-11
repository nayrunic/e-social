import type { Answer } from "@/types/types";
import { useEffect, useState, type ChangeEvent } from "react";

import "@/styles/global.css";

type Props = {
    text: string;
    index: number;
    onAnswerChange: (questionId: number, value: string) => void;
    savedAnswers: Answer;
    type: string;
}

export const QuestionComponent = ({ text, index: questionId, onAnswerChange, savedAnswers, type }: Props) => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    useEffect(() => {
        if (savedAnswers && savedAnswers[`${type}_${questionId}`]) {
            setSelectedValue(savedAnswers[`${type}_${questionId}`]);
        }
    }, [savedAnswers, questionId]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedValue(value);
        onAnswerChange(questionId, value);
    };

    const values = type === "IRI" ? [1,2,3,4,5] : [0,1,2,3,4,5] ;

    return (
        <div className="flex flex-col md:flex-row rounded-md p-4 pb-0 md:justify-items-center border border-slate-300 md:border-0 mb-3 md:mb-0">
            <p className="text-sm font-semibold pt-5 md:border-r md:border-t md:w-1/3 p-2 md:pb-0">{text}</p>
            <div className="flex flex-1 items-center justify-between border-t p-2 pl-4"> 
                {
                    values.map((value) => {
                        return (
                            <div className="space-x-1 flex items-center" key={value}>
                                <input 
                                    type="radio"
                                    name={`${type}_${questionId}`}
                                    value={value.toString()}
                                    checked={selectedValue === value.toString()}
                                    onChange={handleChange}
                                    className="mr-1 md:size-4" 
                                />
                                <label>{value}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}