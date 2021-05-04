import React from 'react';
import ReactJson from 'react-json-view';
import { If, Then, Else } from '../If';
import './results.scss';

const Results = (props) => {

    return (
        <div id='output'>
            <If condition={props.waiting}>
                <Then>
                    <div>
                    Waiting ...
                    </div>
                </Then>
                <Else>
                    <ReactJson src={props.Data.headers} name='Headers' theme="rjv-default" />
                    <ReactJson src={props.Data.results} name='Response' theme="rjv-default" />
                </Else>
            </If>
        </div>
    )
}


export default Results;