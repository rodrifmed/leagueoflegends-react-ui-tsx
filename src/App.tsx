import { Component } from 'react';
import * as React from 'react';
import './App.css';
import { Summoner } from './model/Summoner';
import SearchForm from './components/SearchForm';
import PlayerInfo from './components/PlayerInfo';

const url = "http://localhost:8080/api/matches/";

export interface AppProps {
	handleSubmit: any;
}

export interface IAppState {
	matches: any;
	playerInfo: Summoner;
}

export default class App extends Component {

	state: IAppState = {
		playerInfo: new Summoner(),
		matches: []
	}


	getPlayerStats = async (searchValue: any) => {

		const apiCall = await fetch(url + searchValue);
		const response = await apiCall.json();

		const summoner = new Summoner(response.payload);

		this.setState({
			playerInfo: summoner
		});

	}

	handleSubmit = (searchValue: any) => {
		this.getPlayerStats(searchValue)
	}

	render() {
		const { playerInfo } = this.state;

		return (

			<div className="container">
				<SearchForm handleSubmit={this.handleSubmit} />
				<PlayerInfo playerInfoData={playerInfo} />
			</div>

		);
	}
}