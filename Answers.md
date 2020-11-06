1. What problem does the context API help solve?

- Context API reduces state managment complexity by eliminating the need to pass everything down via Props. This is espeically usefull if you need to drill props down multiple levels. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions: An action is an object that is sent to the reducer. An action existing and being sent implies we are trying to make a change to state. It's like a message that we plant in our app - when its called it tells the reducer where to update our state and with what information (via type and payload keys)

- Reducers: Reducers are pure functions (Given same input will always return the same output and have no side effects) that take old state and an action and return the new state. Reducers are a centralized and reliable way to change state - making state management more predictable and de-buggable. 

- Store: The store is home for the apps global state. It provides a single state tree for the app that can be accessed by any component within scope of the provider. It is a 'single source of truth' as it's combines all of the apps state into a single state tree


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is our global state - or the state that the application is in at any given time. Data should live in application state if it needs to be used by multiple components. If this system gets complex (multiple components and mutliple levels of component nesting) it is a good idea to use a managment system liek redux or context api to avoid confusing prop drilling. 

- Component state is state that lives in it's respective component. Component state can only be updated in it's "home" components and can only be passed down with props. This is a good, simple use case for state than only needs to be used/ manipulated within a single component. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux-thunk gives us the ability to write action creators that return a function (instead of an action object). This is handy for delaying a dispatch or only dispatching under certain conditions (you could do this wihtout thunk but the logic would live in you app prior to dispatching - our code would not be very DRY or concise)

1. What is your favorite state management system you've learned and this sprint? Please explain why!

- Context API seems like a simple and suitable tool for most of the Apps we have been building. However Redux takes the cake - once you get through the boiler-plate set up it's clear how powerful and useful it is. You can completley change your state, across multiple components, with a single button click. 
