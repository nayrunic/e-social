declare global {
  interface Window {
    navigation: {
      navigate: (url: string) => Promise<void>;
    }
  }
}

import type { QuestionFeed, Stimulus } from "@/store/store";

export type Question = {
  text: string;
  id: number;
}

export type Answer = {
  [key: number | string]: string | null; // Allow null for unselected questions
}

export type QuestionSizes = {
  [key: string]: number[];
}

export type Rmit = {
  id: number;
  imgSrc: string;
  options: string[];
}

export type User = {
  study_answers: QuestionFeed[];
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
};
