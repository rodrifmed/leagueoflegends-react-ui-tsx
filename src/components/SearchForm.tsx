import { Component } from 'react';
import * as React from 'react';

export interface ISearchFormProps {
    handleSubmit: any;
}

export interface ISearchFormState {
    searchValue: string;
}

export default class SearchForm extends Component<ISearchFormProps, ISearchFormState> {

    initialState: any;

    constructor(props: any) {
        super(props);

        this.initialState = {
            searchValue: ''
        };

        this.state = this.initialState;
    }

    public handleChange = (event: any) => {
        const { value } = event.target;

        this.setState({
            searchValue: value
        });
    }

    public submitForm = () => {
        this.props.handleSubmit(this.state.searchValue);
        this.setState(this.initialState);
    }

    render() {
        const { searchValue } = this.state;

        return (
            <form>
                <label>Player Name</label>
                <input
                    type="text"
                    name="name"
                    value={searchValue}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Search"
                    onClick={this.submitForm} />
            </form>
        );
    }
}