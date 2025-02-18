import { useState, type ReactElement } from "react";

export const useMultiPageSurvey = (steps: ReactElement[]) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if(currentPage + 1 > steps.length - 1) return;
        window.scrollTo(0, 0);
        setCurrentPage(currentPage + 1);
    }

    const handleBack = () => {
        if(currentPage - 1 < 0) return;
        window.scrollTo(0, 0);
        setCurrentPage(currentPage - 1);
    }

    return {
        currentPage,
        setCurrentPage,
        step: steps[currentPage],
        isLastStep: currentPage === steps.length - 1,
        isFirstStep: currentPage === 0,
        steps,
        handleNext,
        handleBack
    }
}
