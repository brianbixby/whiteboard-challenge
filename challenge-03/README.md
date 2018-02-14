You're the junior conductor on a commuter train and have been asked by the senior conductor to do a head count of passengers on the train.

Write a function const traverse = (engine) => {... which takes the engine as a starting location. Travel from the engine to the caboose and total the number of passengers in each car as your progress. return the final total once your traversal is complete.

Each car, including the engine will have the following signature:

{ <engine>
    value: 2,
    next: {  <next car>
        value: 16,
        next: { <next car>
    }
}