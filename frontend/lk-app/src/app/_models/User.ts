import { Meal } from './meal';

export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    added: string;
    calories: Number;
    dailyCal: Number;
    meals: Meal[];
}
