import { Meals } from './meals';

export interface User {
    id: number;
    name: string;
    role: string;
    added: string;
    maxCal: Number;
    meals: Meals;
}
