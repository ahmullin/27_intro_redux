import React from 'react';



export default function createStore(reducer){
  return {
    // __state: null,
    //  __state: undefined (but if we dont set this, it will be undefined anyway)
    // state, can also do this, it's called shorthand property assignment
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
