import { Hunting } from "../hunting/Hunting";
import { Level } from "../level/Level";

export interface FishResponse {
    name: string;
    averageWeight: number;
    huntingList: Hunting[];
    level: Level;
}