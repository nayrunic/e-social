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