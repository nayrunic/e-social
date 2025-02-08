import { atom } from 'nanostores';

export type Stimulus = {
    title: string;
}

type Question = {
    id: string;
    reaction: string;
    like: boolean;
}

export type User = {
        study_answers: Question[];
        stimuli_left: Stimulus[];    
        id: string;
        email: string;
        profile_completed: boolean;
        name: string;
        age: number;
        country: string;
        genre: string;
        studies: string;
        social_hours: number;
        use_social: boolean;
}|null;

export const selectedReaction = atom<string>("none");

export const selectReaction = (reaction: string) => {
    selectedReaction.set(reaction);
}

export const answeredQuestions = atom<Question[]>([]);
export const setAnsweredQuestions = (value: Question[]) => {
    answeredQuestions.set(value)
}

export const addAnsweredQuestion = (question: Question) => {
    answeredQuestions.set([...answeredQuestions.get(), question]);
}

export const isDialogOpen = atom<boolean>(false);
export const setDialog = (value: boolean) => {
    isDialogOpen.set(value);
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

export const user = atom<User>(null);

export const setUser = (current: User) => {
    user.set(current);
}

export const getUser = () => user.get()