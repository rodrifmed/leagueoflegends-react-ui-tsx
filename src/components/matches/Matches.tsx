import { Component } from 'react';
import * as React from 'react';
import { Match } from 'src/model/Match';
import "./Matches.css"

interface MatchesProps {
    matchArray: Match[];
}

export default class Matches extends Component<MatchesProps> {

    render() {

        const { matchArray } = this.props;

        return (
            <React.Fragment>
                {matchArray.map((row: Match, index) => {
                    return (
                        <div key={index}>{

                            <React.Fragment>
                                <div className={row.outcome === 'Win' ? 'box-matches box-matches--victory' : 'box-matches box-matches--defeat'}>
                                    {/* status */}
                                    <div className="box-matches-status">
                                        <div className={row.outcome === 'Win' ? 'box-matches-status__result box-matches-status__result--win' : 'box-matches-status__result box-matches-status__result--defeat'}>
                                            {row.outcome}
                                        </div>
                                        <div className="box-matches-status__time">{row.gameDuration}</div>
                                    </div>
                                    {/* setting-info */}
                                    <div className="box-matches-setting-info">
                                        <div className="box-matches-setting-info__img">
                                            <img src={require("../../assets/img/champion/" + row.championImgProfile)} />
                                        </div>
                                        <div className="box-matches-setting-info__box__spell">
                                            <div className="box-matches--setting-info__spell">
                                                <img src={require("../../assets/img/spell/" + row.summonerSpells[0] + ".png")} />
                                            </div>
                                            <div className="box-matches--setting-info__spell">
                                                <img src={require("../../assets/img/spell/" + row.summonerSpells[1] + ".png")} />
                                            </div>
                                        </div>
                                        <div className="box-matches-setting-info__box__rune">
                                            {row.summonerRunes.map((row, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <div className="box-matches--setting-info__rune">
                                                            <img src={require("../../assets/img/" + row)} />
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </div>
                                        <div className="box-matches-setting-info__name">{row.championName}</div>
                                    </div>
                                    {/* /KDA */}
                                    <div className="box-matches-kda">
                                        <div className="box-matches-kda__kda-number">{row.kda}</div>
                                    </div>
                                    <div className="box-matches-stats">
                                        <div className="box-matches-stats__lvl">
                                            Level {row.championLevel}
                                        </div>
                                    </div>
                                    <div className="box-matches-items-list">
                                        {row.items.map((row, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <div className="box-matches-items-list__item">
                                                        <img src={require("../../assets/img/item/" + row)} />
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                </div>
                            </React.Fragment>
                        }

                        </div>)

                })}
            </React.Fragment>
        );
    }
}

