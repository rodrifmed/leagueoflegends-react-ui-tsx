import { Component } from 'react';
import * as React from 'react';
import { Summoner } from 'src/model/Summoner';

export interface PlayerInfoProps {
    playerInfoData: Summoner;
}

export default class PlayerInfo extends Component<PlayerInfoProps> {

    render() {

        const { playerInfoData } = this.props;

        return (
            <div>
                <div>{playerInfoData.id}</div>
                <div>{playerInfoData.accountId}</div>
                <div>{playerInfoData.name}</div>
                <div>{playerInfoData.profileIconId}</div>
                <div>{playerInfoData.revisionDate}</div>
                <div>{playerInfoData.summonerLevel}</div>
            </div>
        );
    }
}

