import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';

const Results = (props) => {
    return (
        <div id='output'>
            <ReactJson  src={props.Data.headers} name='Headers' theme="rjv-default" />
            <ReactJson src={props.Data.results} name='Response' theme="rjv-default" />
        </div>
    )
}

export default Results;