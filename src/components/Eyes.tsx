import { useState, useEffect, useRef } from "react";
import { type Answer, type Rmit } from "@/types/types";
import { formatTime } from "@/lib/utils";
import { isDialogOpen, setDialogData } from "@/store/store";

type Props = {
  rmit: Rmit[];
};

export const Eyes = ({ rmit }: Props) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer>({}); // Store answers by card ID
  const [startTime, setStartTime] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const isFirstRender = useRef(true); // Ref to track initial render

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Set to false after the first render
      setStartTime(Date.now()); // Start timing when the component mounts (first render)
    }
  },);

  const currentCard = rmit[currentCardIndex];

  const handleOptionClick = (option: string) => {
    if (currentCard) {
      // Check if currentCard exists
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [`RMIT_${currentCard.id}`]: option, // Directly store answer by card ID
      }));
    }
  };

  const handleNextCard = () => {

    const currentAnswered = Object.keys(answers).some(key => key === `RMIT_${currentCardIndex + 1}`);

    if(!currentAnswered){
        isDialogOpen.set(true);
        setDialogData({title:"Error", message:"Por favor responde la pregunta antes de avanzar."})
        return;
    }

    if (currentCardIndex < rmit.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }else {
        if(startTime){
            setTimeElapsed(Date.now() - startTime);
            push();
        }
    }
  };

  const push = async () => {
    const res = await fetch('/api/surveys', {
        method: "POST",
        body: JSON.stringify({
          table: "RMIT",
          answers: { answers, time: formatTime(timeElapsed) },
        })
      });

    const json = await res.json();

    const {message, error} = json;

    if(error){
        setDialogData({title:"Error", message:"Lo sentimos, hubo un error, por favor intenta otra vez."})
        isDialogOpen.set(true);
        return;
    }

    window.location.href = "/instructions-02"


  }

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <div className="p-4 container flex flex-col items-center gap-4 flex-1">
      {currentCard && (
        <>
          <div className="rounded-lg w-full max-w-[694px] bg-white p-4 mb-4">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-xl font-semibold px-4">Instrucciones</h1>
              <button
                id="instructions-toggle"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </button>
            </div>
            <div id="instructions-content" className="hidden p-4">
              <ul className="mt-4">
                <li>Para cada par de ojos, <b>elige qué palabra describe mejor</b> lo que la persona en la imagen está <b>pensando o sintiendo</b>. 
                    Puede que sientas que más de una palabra es aplicable, pero por favor elige solo una palabra, 
                    la palabra que consideres que es la más adecuada. Antes de hacer tu elección, asegúrate de que has leído las cuatro. 
                    Intenta realizar la tarea de forma rápida y precisa.</li>
              </ul>
            </div>
          </div>
          <div className="p-4 border border-slate-300 rounded-lg shadow-md max-w-3xl bg-white">
            <img src={currentCard.imgSrc} alt="rmit" loading="eager" className="w-full" onLoad={() => console.log("Image loaded")}/>
            <ul className="grid grid-cols-2 text-center gap-2 mt-4">
              {currentCard.options.map((option) => (
                <li
                  className={`break-words text-sm sm:text-base p-2 border shadow-md border-slate-300 rounded-lg hover:bg-slate-300 transition-colors w-full h-full cursor-pointer ${
                    answers[`RMIT_${currentCard.id}`] === option ? "bg-slate-300" : "" // Highlight selected option
                  }`}
                  key={option}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 justify-center w-full max-w-3xl mt-5">
              <button
                onClick={handlePreviousCard}
                disabled={currentCardIndex === 0}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
              <button
                onClick={handleNextCard}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
              >
                {currentCardIndex < (rmit.length - 1) ? "Siguiente" : "Finalizar"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
