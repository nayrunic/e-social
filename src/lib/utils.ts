import type { Question } from "@/types/types";

export function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

export const shuffle = <T>(array: T[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array; 
  }; 

export const randomIntFromInterval = (min: number, max:number ):number => {  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function paginate<T>(arr: T[], numSubArrays: number): T[][] {

  const subArrays: T[][] = [];
  const subArraySize = Math.ceil(arr.length / numSubArrays); 

  for (let i = 0; i < numSubArrays; i++) {
    const startIndex = i * subArraySize;
    const endIndex = Math.min((i + 1) * subArraySize, arr.length);
    subArrays.push(arr.slice(startIndex, endIndex));
  }

  return subArrays;
}

export const formatTime = (milliseconds: number): string => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)));

  const padZero = (num: number) => num.toString().padStart(2, '0');

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};

export function generateUserId(): string {
  // Get current timestamp (gives us first 13 digits)
  const timestamp = Date.now().toString();
  
  // Generate 4 random digits
  const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
  // Combine timestamp and random digits
  const userId = `${timestamp}${randomDigits}`;
  
  return userId;
}