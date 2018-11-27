import { Component } from 'react';
import * as React from 'react';
import { Summoner } from 'src/model/Summoner';
import './PlayerInfo.css'

export interface PlayerInfoProps {
    playerInfoData: Summoner;
}

export default class PlayerInfo extends Component<PlayerInfoProps> {

    render() {

        const { playerInfoData } = this.props;

        return (
            <React.Fragment>
                {playerInfoData.name !== undefined && (
                    <div className="player-info">
                        <div className="player-info__name">
                            <strong>Name:</strong> {playerInfoData.name}
                        </div>
                        <div className="player-info__account-id">
                            <strong>Account Id:</strong> {playerInfoData.accountId}
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

