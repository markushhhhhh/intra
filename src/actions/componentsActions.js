'use strict';
// In the actions is where an update of the initialState is made or a database call is made.
//For all functions in the actionsfiles - depending on if the functions returns an object {...} or a function different measures are taken.
// If the function returns an object, the data and info will be redirected to the reducer through the store where the initialState file is updated.
// If the function returns a function it will just run as a usual function and not get connected with the store and reducer. In this app, if a function is returned that means that a
// database call is being made instead of updating the initialState. The individual components imports the necessary actions needed

export function renderComponent(type) {
    return{
        type: type,
        payload: true
    }
}

export function unrenderComponent(type) {
    return{
        type: type,
        payload: false
    }
}