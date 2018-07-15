# One Flow tech Test

This project is the technical test for OneFlow. The requirements are as follows:

1. Create a repository on Github for the task
2. Create an Express.js app that accomplishes the following:
  a. Implements a service that stores the following data-set:
  https://gist.github.com/thekiwi/ab70294c8d7ab790d9b6d70df9d3d145
  b. Serves the list of episodes to the front-end via a route
  c. Allows filtering of the results with an optional ‘season’ query string
3. Using a front-end framework of your choice, create a simple web app that:
  a. Makes an API request to the above route to fetch the episodes
  b. Displays the episodes (as thumbnail & title) in a grid
  c. Has a text-box to enable client-side filtering of the episodes by title
4. Create unit tests as appropriate, with the testing framework of your choice

## My approach:

My first step was to create a diagram (see below) of how the data gets sent from the express API to the react front end.

You will see that the diagram also has a route for sending episodes from a given season, the original plan was to create an option in react for a user to specify the season but unfortunately I ran out of time to do the react component. However, if you run the server and navigate to `http://localhost:3232/season/2` you can see the episodes from season 2 and so on.

After creating the diagram, I started work on creating the express API with one route for episodes and another for seasons as discussed above. The seasons route required some backend logic which is in the model directory.

Unit testing for the back end was done using mocha as a framework.

Once the back end was created I started work on the react app and created a new directory for it. I used the create-react-app package for ease of use and deleted everything I didn't need.

The react app is fairly straightforward as all it does it render an episodes component with an image and a title to the page. There is a test to check the app renders without crashing and had I had more time to work on the project I would have created more tests.

I had planned to implement the search feature but unfortunately ran out of time to do so.

If I had more time I would have implemented the two features discussed above as well as spending more time on the CSS to make it look a bit better.
Overall, I am relatively happy with the project however it feels a bit unnatural not to fully test the react components but i stuck to the instructions which said unit tests.

## Diagram:


## How to run:

First clone the repo

`git clone https://github.com/anderscodes/oneflow-tech-test.git`

Then install the express API

`npm install`

Then install the React App

`cd react-app npm install`

To run the app navigate to the root directory and run npm start which will start both the express server and the react app

`npm start`

To run the tests navigate to the root directory and run npm test which will start both the server and the react tests

`npm test`
