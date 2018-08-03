import { Meals } from './meals';

export interface User {
    id: number;
    username: string;
    role: string;
    added: string;
    maxCal: Number;
    meals: Meals;
}
