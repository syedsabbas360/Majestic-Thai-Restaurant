import React, { Component } from 'react';
// import '../styles/App.css';
import BaseLayout from './Layout';
import Appetizers from './Appetizers';
import Desserts from './Desserts';
import Entrees from './Entrees';

class App extends Component {
  constructor(props){
    super()
      this.state =  {
        appetizers: [],
        entrees: [],
        desserts: []
      }
  }
  componentDidMount(){
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then(results => results.json())
    .then(data => {
      this.setState({
        appetizers: data[0].Appetizers,
        entrees: data[0].Entrees,
        desserts: data[0].Desserts
      })
    })
  }

  render() {
// Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
// Each component needs to receive state via props.
    return (
      <BaseLayout>
          <Appetizers items={this.state.appetizers} />
          <Entrees items={this.state.entrees}/>
          <Desserts items={this.state.desserts}/>
      </BaseLayout>
    );
  }
}

export default App;
