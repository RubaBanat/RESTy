import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: ''
        }
    }

    clickHandler = (e) => {
        e.preventDefault();
        this.setState({
            url: e.target.url.value,
            method: e.target.method.value
        })
    }

    render() {
        return (
            <main>
                <div id='container'>
                    <form onSubmit={this.clickHandler}>
                        <div id='input'>
                            <label htmlFor=""> URL:</label>
                            <input type="url" name="url" id="url" />
                            <button type='submit'> GO! </button>
                        </div>
                        <br/>
                        <div id='methods'>
                            <input type='radio' id='GET' name='method' value='GET' required />
                            <label for='GET' >GET</label>
                            <input type='radio' id='POST' name='method' value='POST' />
                            <label for='POST'>POST</label>
                            <input type='radio' id='PUT' name='method' value='PUT' />
                            <label for='PUT'>PUT</label>
                            <input type='radio' id='DELETE' name='method' value='DELETE' />
                            <label for='DELETE'>DELETE</label>
                        </div>
                    </form>
                    <div id='output'>
                        <span id='method'>{this.state.method}</span>

                        <span id='text'> {this.state.url}</span>
                    </div>
                </div>
            </main>
        )
    }

}

export default Form;