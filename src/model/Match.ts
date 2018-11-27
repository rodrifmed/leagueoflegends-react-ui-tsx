import { SummonerRune } from "./SummonerRune";

export class Match {

    accountId: number;
    gameId: number
    outcome: string
    championName: string
    gameDuration: string
    kda: string
    summonerName: string
    summonerSpells: number[]
    summonerRunes: SummonerRune[]
    items: number[]
    championLevel: number
    championImgProfile: string

}