import { Component } from 'react';
import * as React from 'react';
import './App.css';
import SearchForm from './components/searchForm/SearchForm';
import PlayerInfo from './components/playerInfo/PlayerInfo';
import Matches from './components/matches/Matches';
import Loading from './components/loading/Loading';
import NotFound from './components/NotFound';

export interface AppProps {
	handleSubmit: any;
}

export interface IAppState {
	matches: any;
	playerInfo: any;
	loading: boolean;
	notFound: boolean;
}

export default class App extends Component {

	url: string = process.env.REACT_APP_API_URL + "matches/";

	state: IAppState = {
		playerInfo: {},
		matches: [],
		loading: false,
		notFound: false
	}

	getPlayerStats = async (searchValue: any) => {

		this.setState({
			loading: true,
			notFound: false
			playerInfo: {},
			matches: [],
		});

		const apiCall = await fetch(this.url + searchValue);

		if (apiCall.status !== 200) {
			this.setState({
				loading: false,
				notFound: true,
				playerInfo: {},
				matches: []
			});
			return;
		}

		const response = await apiCall.json();

		const summoner = response.payload.summonerInfo;
		const matches: [] = response.payload.matches;

		this.setState({
			loading: false,
			notFound: false,
			playerInfo: summoner,
			matches: matches
		});

	}

	handleSubmit = (searchValue: any) => {
		this.getPlayerStats(searchValue)
	}

	render() {
		const { playerInfo, matches, loading, notFound } = this.state;

		return (
			<React.Fragment>
				<div className="container" id="page-search">
					<SearchForm handleSubmit={this.handleSubmit} />
					{ notFound && <NotFound /> }
					{ loading && <Loading />}
					<PlayerInfo playerInfoData={playerInfo} />
					<Matches matchArray={matches} />
				</div>
			</React.Fragment>

		);
	}
}