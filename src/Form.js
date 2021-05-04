import React from 'react';
import superagent from 'superagent';
import './form.scss';

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//     }
const Form = (props) => {


    const clickHandler = async (e) => {
        e.preventDefault();
        try {
            console.log('method', e.target.method.value);
            console.log('url', e.target.url.value);
            superagent.get(e.target.url.value).then(data => {
                // [(e.target.method.value.toLowerCase())]
                console.log(data.body.results);
                console.log(data.headers);
                props.updateState({ data: data.body.results, headers: data.headers, count: data.body.count , method : e.target.method.value , url:  e.target.url.value})
            })

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <main>
            <div id='container'>
                <form onSubmit={clickHandler}>
                    <div id='input'>
                        <label htmlFor=""> URL:</label>
                        <input type="url" name="url" id="url" />
                        <button type='submit'> GO! </button>
                    </div>
                    <br />
                    <div id='methods'>
                        <input type='radio' id='GET' name='method' value='GET' required />
                        <label htmlFor='GET' >GET</label>
                        <input type='radio' id='POST' name='method' value='POST' />
                        <label htmlFor='POST'>POST</label>
                        <input type='radio' id='PUT' name='method' value='PUT' />
                        <label htmlFor='PUT'>PUT</label>
                        <input type='radio' id='DELETE' name='method' value='DELETE' />
                        <label htmlFor='DELETE'>DELETE</label>
                    </div>
                </form>
            </div>
        </main>
    )
}


export default Form;