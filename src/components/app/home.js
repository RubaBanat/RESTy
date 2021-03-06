import React from 'react';
import './App.css';
import Form from '../form';
import Results from '../results';
import History from '../history';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: '',
        method: '',
        headers: {},
        count: 0,
        results: [],
        callback: {},
        history: JSON.parse(localStorage.getItem('Api')) || [],
        waiting: false,
      }
  
    }
    callback = (api) =>{
      this.setState({callback : api})
  }
    storage = (data) => {
      let storageArr = this.state.history.filter((ele) => data.method === ele.method && data.url === ele.url);
      if (!storageArr.length){

        this.setState({ history: [...this.state.history, data] });
        localStorage.setItem('Api', JSON.stringify(this.state.history))
      }
    }
    toggleModal = () => {
      this.setState({ waiting: !this.state.waiting });
    }
    updateState = (results) => {
      console.log('my Results', results);
      this.setState({ url: results.url, method: results.method, headers: results.headers, count: results?.count, results: results.data })
    }

    render() {
      return (
        <>
 
          <Form updateState={this.updateState} toggle={this.toggleModal} storage ={this.storage} api={this.state.callback} localStorage={this.props.location?.state}/>
          <Results Data={this.state} waiting={this.state.waiting} />
          <div id='history'> 
          <History data={this.state.history} callback={this.callback}/>
          </div>
       
        </>
      );
    }
  }
  export default Home;
  