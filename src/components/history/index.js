import './history.scss';
import { If, Then } from '../If';

const History = (props) => {
    function handelClick(e) {
        let [method, url] = (e.target.innerText).split(' ');
        console.log('hello' , method , url);
        props.callback({method,url})
        
      }
    return (
        <If condition={props.data.length}>

            <Then>
            
                {props.data.map((ele ,index) => {
                    return (
                        <section  className='history'>
                        <div  className='history' onClick={handelClick} key={index}>
                            <div id='Method'>
                                <span id='method'>{ele.method}</span> <span id='url'>{ele.url}</span>  
                            </div>
                            <div id='URL'>
                            </div>
                        </div>
                        </section>
                    )
                })}
            </Then>
        </If>
    )
}


  export default History;

