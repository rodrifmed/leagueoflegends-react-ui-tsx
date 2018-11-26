import { Component } from 'react';
import * as React from 'react';
import { Match } from 'src/model/Match';

interface MatchesProps {
    matchArray: Match[];
}

export default class Matches extends Component<MatchesProps> {

    render() {

        const { matchArray } = this.props;

        return (
            <div>
                {matchArray.map((row: Match, index) => {

                    return (<div key={index}>

                        <div>{row.championName}</div>
                        <div>{row.gameDuration}</div>

                    </div>)

                })}
            </div>
        );
    }
}

