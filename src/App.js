import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      headers: {},
      count: 0,
      results: []
    }
  }
    updateState = (results) => {
      console.log('my Results' , results);
      this.setState({ url: results.url, method: results.method, headers: results.headers, count: results.count, results: results.data })
    }
    render() {
      return (
        <>
          <Header />
          <Form updateState={this.updateState} />
          <Results Data={this.state}/>
          <Footer />
        </>
      );
    }
  }

  export default App;
