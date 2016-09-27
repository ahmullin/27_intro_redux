// challenge:
// move to store.js file
// add button that says reset, which sets state back to zero and then rerenders


import React from 'react';
import ReactDOM from 'react-dom';

function reducer(state=0, action){
  // this function will take in current state and an action, and ...
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1
    case 'DECREMENT_COUNT':
      return state - 1
    default:
      return state

  }
}


function createStore(reducer){
  return {
  getState(){
    return this.__state
  },

  dispatch(action){
    // use action to figure out how I should update state
    // also take in current state, because it needs to know about that
    this.__state = reducer(this.__state, action)
    console.log(this.__state)
    // want to et store know about any listeners that need to be fired
    // want to update my vieews when there is a change in my dispatch
    this.listeners.forEach(function(listener){
      listener()
    })
  },

    listeners: [],

    subscribe(listener) {
      this.listeners.push(listener)
    },
  }
}

const store = createStore(reducer)

  // __state: null,
  //  __state: undefined (but if we dont set this, it will be undefined anyway)
  // state, can also do this, it's called shorthand property assignment


store.dispatch({})


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

  render(){
    return (
      <div>
      <h1>{this.props.store.getState()}</h1>
        <button onClick={this.onAdd.bind(this) }>Add</button>
        <button onClick={this.onSubtract.bind(this) }>Subtract</button>
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
