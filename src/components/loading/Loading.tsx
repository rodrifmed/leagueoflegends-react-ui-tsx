import { Component } from 'react';
import * as React from 'react';
import './Loading.css';

export default class Loading extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='loading-spinner'></div>
            </React.Fragment>
        );
    }
}