// challenge:
// add button that says reset, which sets state back to zero and then rerenders
/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './store'

const store = createStore(reducer)
store.dispatch({})

function reducer(state=0, action){
  // this function will take in current state and an action, and ...
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1
    case 'DECREMENT_COUNT':
      return state - 1
    case 'RESET_COUNT':
      return 0
    default:
      return state

  }
}

class Counter extends React.Component {

    onAdd (){
      let action = {type: 'INCREMENT_COUNT'}
      // actions are just js objects with a type  on them, and maybe some data
      this.props.store.dispatch(action)
    }

    onSubtract (){
      let action = {type: 'DECREMENT_COUNT'}
      // actions are just js objects with a type  on them, and maybe some data
      this.props.store.dispatch(action)
    }

    onReset (){
      let action = {type: 'RESET_COUNT'}
      // actions are just js objects with a type  on them, and maybe some data
      this.props.store.dispatch(action)
    }

  render(){
    return (
      <div>
      <h1>{this.props.store.getState()}</h1>
        <button onClick={this.onAdd.bind(this) }>Add</button>
        <button onClick={this.onSubtract.bind(this) }>Subtract</button>
        <button onClick={this.onReset.bind(this) }>Reset</button>
      </div>
    )
  }
}

// pass store into component so that it can have access to the store and the state
function render(){
  ReactDOM.render(<Counter store= {store} />, document.getElementById('container'));
}

render()
// want to subscribe store to this
// whenever there is a change in my state, want to have store fir off some functions
// want to tell store what funcitons it should fire off when there is a change to state
store.subscribe( render )
