import { Meal } from './meal';

export interface User {
    id: number;
    username: string;
    role: string;
    added: string;
    maxCal: Number;
    meals: Meal[];
}
