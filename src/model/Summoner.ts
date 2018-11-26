import { JsonHelper } from 'src/helper/JsonHelper';

export class Summoner {

    id: number
    name: string
    accountId: number
    profileIconId: number
    revisionDate: number
    summonerLevel: number

    constructor(data?: any) {
        if (JsonHelper.isEmpty(data)) {
            return;
        }

        this.id = data.id;
        this.accountId = data.accountId;
        this.name = data.name
        this.profileIconId = data.profileIconId
        this.revisionDate = data.revisionDate
        this.summonerLevel = data.summonerLevel

    }

}