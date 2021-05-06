import { Else, If, Then } from '../If';
import './historyDetails.scss';
import React from 'react';
import ReactJson from 'react-json-view';


// let api = JSON.parse(localStorage.getItem('Api')) || [];

class HistoryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: JSON.parse(localStorage.getItem('Api')) || [],
            body: [],
        }
    }

    renderHandler = (data) => {
        this.setState({ body: data })

    }

    render() {
        console.log('hii', this.state.api);

        return (
            <section id='all'>

                <If condition={this.state.api.length}>
                    <Then>
                        <section id='api'>

                            {this.state.api.map((data, index) => {
                                return (

                                    <div key={index} onClick={() => {
                                        this.renderHandler(data)
                                    }}
                                    >
                                        <span id="methodd">{data.method}
                                        </span>

                                        <span id="URL">
                                            {data.url}</span>
                                        <button id="button" onClick={() => {
                                            this.props.history.push('/', {
                                                method: data.method, url: data.url
                                            })
                                        }}
                                        > Re-run </button>
                                    </div>
                                )
                            })}
                        </section>

                    </Then>
                </If>
                <div id='outputt' title='output'>
                    <If condition={!this.state.body || this.state.body.length === 0}>
                        <Then>
                            <div> No Response </div>
                        </Then>
                        <Else>
                            <ReactJson src={this.state.body} theme="rjv-default" />
                        </Else>
                    </If>
                </div>
            </section>

        )
    }
}

export default HistoryDetails;

