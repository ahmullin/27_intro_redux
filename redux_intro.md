Redux

  + Background:
    - Facebook releases React (), started as test project, looking for new library, released as open source tool
    - How do we structure applications? What components are in charge of what pieces of state, etc. ?
    - Come up with Flux, just a pattern for structuring apps (like MVC), no helper tools, just a design
    - Dan Abramov reads about flux and starts working on Redux
      -this is actually a library with functions and helper methods to implement flux into your application
      -You can use with vanilla js, Backbone, Angular, etc. but works best with React
    - Facebook likes it, hire Dan, working on React-Redux to improve it

  + Flux
    - works with React to manage state, it is an architecture pattern, like a sedan, not a specific car
    -to update state, we can dispatch actions, which will update state and update our views

  + Store
    - represent state of our application
    - keeps track of (stores) the entire state of our application
    - makes the process of change --> view super fast
    - updates the state, can subscribe to event handlers, run callback functions and change the view
    - it is told how to update the state appropriately by reducers

  + Reducers
    - pure function
    - takes in current state, and an action that needs to take place/be altered
    - based on the type of action, it returns a new state
    - user does something (click button), creates action, send to reducer, reducer looks at type of action, does

  + Actions
    - plain Javascript object, with a type property, can send or dispatch that into our reducer function
    - sort of in place of dispatchers in Flux



    + Summary of flow:
      - This need to change the state and in what way? then tells store something has changed, this is what new state needs to look like, state says ok, I'm gonna update my state and tell any views who need to know about the update and they will re-render as necessary
