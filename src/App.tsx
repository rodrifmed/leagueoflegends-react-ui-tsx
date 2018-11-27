import { Component } from 'react';
import * as React from 'react';
import './App.css';
import SearchForm from './components/searchForm/SearchForm';
import PlayerInfo from './components/PlayerInfo';
import Matches from './components/Matches';

export interface AppProps {
	handleSubmit: any;
}

export interface IAppState {
	matches: any;
	playerInfo: any;
}

export default class App extends Component {

	url:string = process.env.REACT_APP_API_URL	+ "matches/";

	state: IAppState = {
		playerInfo: {},
		matches: []
	}

	getPlayerStats = async (searchValue: any) => {

		const apiCall = await fetch(this.url + searchValue);

		if (apiCall.status === 500) {
			return;
		}

		const response = await apiCall.json();

		const summoner = response.payload.summonerInfo;
		const matches: [] = response.payload.matches;

		this.setState({
			playerInfo: summoner,
			matches: matches
		});

	}

	handleSubmit = (searchValue: any) => {
		this.getPlayerStats(searchValue)
	}

	render() {
		const { playerInfo, matches } = this.state;

		return (
			<React.Fragment>
				<div className="container" id="page-search">
					<SearchForm handleSubmit={this.handleSubmit} />
					<PlayerInfo playerInfoData={playerInfo} />
					<Matches matchArray={matches} />
				</div>
			</React.Fragment>

		);
	}
}