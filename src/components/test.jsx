import { useState, useEffect } from 'react';

// Question Component
const QuestionComponent = ({ questionText, questionId, onAnswerChange, savedAnswers }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    // Check if there's a saved answer for this question
    if (savedAnswers && savedAnswers[questionId]) {
      setSelectedValue(savedAnswers[questionId]);
    }
  }, [savedAnswers, questionId]); // Add savedAnswers and questionId to dependency array

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onAnswerChange(questionId, value);
  };


  return (
    <div>
      <p>{questionText}</p>
      <div>
        {[1, 2, 3, 4, 5].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={`question-${questionId}`}
              value={option.toString()} // Convert to string for consistency
              checked={selectedValue === option.toString()}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};


// Survey Step Component
const SurveyStep = ({ questions, onAnswerChange, savedAnswers }) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionComponent key={question.id} questionText={question.text} questionId={question.id} onAnswerChange={onAnswerChange} savedAnswers={savedAnswers}/>
      ))}
    </div>
  );
};

// Form Survey Component (Parent)
const FormSurvey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({}); // Store all answers

  const handleAnswerChange = (questionId, value) => {  // Callback function
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const surveyData = [
    { id: 1, text: 'Question 1' },
    { id: 2, text: 'Question 2' },
    { id: 3, text: 'Question 3' },
    { id: 4, text: 'Question 4' },
    { id: 5, text: 'Question 5' },
    { id: 6, text: 'Question 6' },
    { id: 7, text: 'Question 7' },
    { id: 8, text: 'Question 8' },
    { id: 9, text: 'Question 9' },
    // ... more questions
  ];

  const questionsPerStep = 6; // Number of questions per step
  const totalSteps = Math.ceil(surveyData.length / questionsPerStep);

  const getQuestionsForStep = (step) => {
      const startIndex = step * questionsPerStep;
      const endIndex = Math.min((step + 1) * questionsPerStep, surveyData.length);
      return surveyData.slice(startIndex, endIndex)
  }

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    // Process the answers here (e.g., send to server)
    e.preventDefault();
    console.log('Answers:', answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SurveyStep questions={getQuestionsForStep(currentStep)} onAnswerChange={handleAnswerChange} savedAnswers={answers}/>

      <div>
        <button className="bg-white p-2 m-1" type="button" onClick={handleBack} disabled={currentStep === 0}>
          Back
        </button>
        <button className="bg-white p-2 m-1" type="button" onClick={handleNext} disabled={currentStep === totalSteps - 1}>
          Next
        </button>
        {
          currentStep === totalSteps - 1 &&
          <button type="submit">Submit</button>
        }
      </div>
    </form>
  );
};


export default FormSurvey;