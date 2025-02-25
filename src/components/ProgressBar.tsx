import { STEPS } from "@/lib/data"
import { currentStep } from "@/store/store"
import { useStore } from "@nanostores/react";

import "@/styles/global.css";

export const ProgressBar = () => {
  const _currentStep = useStore(currentStep);

  return (
    <div className="w-[320px] py-6 mb-4">
      <div className="flex justify-between">
        {STEPS.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Circle */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full 
                ${
                  index + 1 < _currentStep
                    ? 'bg-sky-700 text-white' // completed steps
                    : index + 1 === _currentStep
                    ? 'bg-white border-2 border-sky-700 text-sky-700' // current step
                    : 'bg-gray-500 text-white' // upcoming steps
                }`}
            >
              {index + 1 <= _currentStep ? (
                <span className="text-sm font-semibold">{index + 1}</span>
              ) : (
                <span className="text-sm">{index + 1}</span>
              )}
            </div>

            {/* Step Label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center min-w-max">
              <span
                className={`text-sm font-medium ${
                  index + 1 < _currentStep
                    ? 'text-sky-700' // completed steps
                    : index + 1 === _currentStep
                    ? 'text-sky-700 font-bold' // current step
                    : 'text-gray-600' // upcoming steps
                }`}
              >
                {step}
              </span>
            </div>

            {/* Connection Line */}
            {index < STEPS.length - 1 && (
              <div
                className={`absolute top-1/2 -translate-y-1/2 left-10 w-[calc(100%+2.5rem)] h-[2px] ${
                  index + 1 < _currentStep ? 'bg-sky-700' : 'bg-gray-500'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

