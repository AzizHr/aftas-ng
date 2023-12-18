import { Hunting } from "../hunting/Hunting";

export interface MemberResponse {
    num: number;
    name: string;
    familyName: string;
    accessionDate: string;
    nationality: string;
    identityDocument: string;
    identityNumber: string;
    huntingList: Hunting[];
}