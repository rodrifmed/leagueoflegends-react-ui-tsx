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
                        <div>{row.championLevel}</div>
                        <div>{row.gameDuration}</div>
                        <div>{row.summonerName}</div>
                        <div>{row.gameDuration}</div>
                        <div>{row.outcome}</div>
                        <div>{row.kda}</div>
                        <div>Summoner Speels</div>    
                        {row.summonerSpells.map((row, index) => {
                            return (<div>{row}</div>);
                        })}
                        <div>Summoner Runes</div>    
                        {row.summonerRunes.map((row, index) => {
                            return (<div>{row}</div>);
                        })}

                         <div>items</div>    
                        {row.items.map((row, index) => {
                            return (<div>{row}</div>);
                        })}

                    </div>)

                })}
            </div>
        );
    }
}

