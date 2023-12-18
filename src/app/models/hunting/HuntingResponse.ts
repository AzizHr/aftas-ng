import { Competition } from "../competition/Competition";
import { Fish } from "../fish/Fish";
import { Member } from "../member/Member";

export interface HuntingResponse {
    id: number;
    numberOfFish: number;
    competition: Competition;
    fish: Fish;
    member: Member;
}