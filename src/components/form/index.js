import React from 'react';
import superagent from 'superagent';
import './form.scss';

const Form = (props) => {
    const clickHandler = async (e) => {
        e.preventDefault();
        try {

            console.log('method', e.target.method.value);
            console.log('url', e.target.url.value);
            let method = e.target.method.value.toLowerCase();
            let url = e.target.url.value;
            if (method === 'get'){  
                props.toggle();
                superagent[method](url).then(data => {
                    console.log('response', data.body);
                    console.log(data.headers);
                    props.toggle();
                    props.storage({method , url , data: data.body});
                    props.updateState({ data: data.body, headers: data.headers, count: data.body?.count, method: e.target.method.value, url: e.target.url.value })
                })
            }else {
                props.toggle();
                superagent[method](e.target.url.value).send(e.target.body.value).then(data => {
                    props.storage({method , url , data: data.body});
                    props.toggle();
                    props.updateState({ data: data.body, headers: data.headers, count: data.body.count, method: e.target.method.value, url: e.target.url.value })
                }).catch (e => {
                    console.log('error',e.message);
                    props.updateState({ data: e.message, headers:e.message, count:e.message, method:e.message, url: e.message })  
                })
            }
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
                        <input type="url" name="url" id="url" defaultValue={props.api.url || props.localStorage?.url}/>
                        <button type='submit'> GO! </button>
                    </div>
                    <br />
                    <div id='methods'>
                        <input type='radio' id='GET' name='method' value='GET' required defaultChecked />
                        <label htmlFor='GET' >GET</label>
                        <input type='radio' id='POST' name='method' value='POST' />
                        <label htmlFor='POST'>POST</label>
                        <input type='radio' id='PUT' name='method' value='PUT' />
                        <label htmlFor='PUT'>PUT</label>
                        <input type='radio' id='DELETE' name='method' value='DELETE' />
                        <label htmlFor='DELETE'>DELETE</label>
                    </div>
                    <textarea name="body">
                    </textarea>
                </form>
            </div>
        </main>
    )
}


export default Form;