import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export type Stimulus = {
    title: string;
}

export type QuestionFeed = {
    id: string;
    reaction: string;
    like: boolean;
}

type Modal = {
    message: string;
    title: string;
}

export const selectedReaction = atom<string>("none");

export const selectReaction = (reaction: string) => {
    selectedReaction.set(reaction);
}

export const answeredQuestions = atom<QuestionFeed[]>([]);
export const setAnsweredQuestions = (value: QuestionFeed[]) => {
    answeredQuestions.set(value)
}

export const addAnsweredQuestion = (question: QuestionFeed) => {
    answeredQuestions.set([...answeredQuestions.get(), question]);
}

export const dialogData = atom<Modal>({title: "", message: ""});
export const isDialogOpen = atom<boolean>(false)
export const setDialogData = (value: Modal) => {
    dialogData.set(value);
}

export const progress = atom<number>(0);
export const addProgress = () => {
    progress.set(progress.get()+1);
}
export const setProgress = (value: number) => {
    progress.set(value);
}

export const stimuliLeft = atom<Stimulus[]>([]);
export const removeStimulus = (title: string) => {
    stimuliLeft.set(stimuliLeft.get().filter(stimulus => stimulus.title!== title));
}
export const setStimuliLeft = (stimuli: Stimulus[]) => {
    stimuliLeft.set(stimuli);
}

export const currentStep = persistentAtom<number>('currentStep', 1, {
    encode: JSON.stringify,
    decode: JSON.parse,
  });

export const setCurrentStep = (value: number) => {
    currentStep.set(value);
}


