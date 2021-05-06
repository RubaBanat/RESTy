import './history.scss';
import { If, Then } from '../If';

const History = (props) => {
    function handelClick(e) {

        let [method, url] = (e.target.innerText).split(' ');
        // console.log('hello' , method , url);
        props.callback({method,url})
        
      }
    return (
        <If condition={props.data.length}>

            <Then>
            
                {props.data.map((ele ,index) => {
                    return (                      
                        <div  className='history' onClick={handelClick} key={index}>
                            
                                <span id='method'>{ele.method} {ele.url}</span>  
                           
                        </div>
                   
                    )
                })}
            </Then>
        </If>
    )
}


  export default History;

