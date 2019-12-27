1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
   map(),forEach(),filter()
  
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Actions are the single source of information fro the store. They contain a type field which defines what action is to be preformed.  Reducers are pure functons that take the current state and action and return the new state telling the store what to do.
  Store is the object that holds the state of the application
1.  What is middleware?
Middleware is a function that stops and changes an action or another function. It allows side effects to be run without blocking the state updates.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our 
     It's a middleware that let you call an action creator and returns a function instead of an object. THe function receives the store's dispatch.
`action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
    mapStateToProps()
