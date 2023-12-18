import { Hunting } from "../hunting/Hunting";

export interface CompetitionResponse {
    code: string;
    date: string;
    startTime: string;
    endTime: string;
    numberOfParticipants: number;
    location: string;
    amount: number;
    huntings: Hunting[]
}