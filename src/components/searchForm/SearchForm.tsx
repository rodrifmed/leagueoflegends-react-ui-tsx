import { Component } from 'react';
import * as React from 'react';
import { Form, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import './SearchForm.css'

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
            <React.Fragment>
                <Form className="search-form-box">
                    <h1 className="search-form-box--title">League of Legends Stats App</h1>
                    <FormGroup controlId="search-form-box--search">
                        <FormControl
                            type="text"
                            name="name"
                            value={searchValue}
                            onChange={this.handleChange} 
                            placeholder="Enter Player Name"
                            className="search-form-box--input"
                        />
                        <Button 
                            type="button"
                            onClick={this.submitForm}
                            className="search-form-box--button"
                        >
                            <Glyphicon glyph="search" />
                        </Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        );
    }
}