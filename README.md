# fortune_cookie

file serving project

For this project, we will be creating a Fortune Cookie application! A fortune will appear once a user clicks the fortune cookie.

To start, you will need to create an index.html file that contains the fortune cookie image.

We will also need to link up our app.js, stylesheet.css, bootstrap and jquery files.

We will then create a data.json file and create an object that contains one "fortune cookie" array. 
Each index in this array will contain a fortune object. Provide at least 5 fortunes.

The next step is to create a "get" request in our app.js. 
Upon clicking the fortune cookie image, the "get" request to the data.json file will fire off.

With the data received from that get request, we can perform a randomization function to grab a random fortune from the returned object. 
We will then append that fortune to the DOM.

HARD MODE: 
Add jQuery animation to the fortunes

PRO MODE: 
Instead of creating a complete fortune message, create multiple arrays in the data.json object that contains compenents that will create a fortune when combined.
Then you will perform multiple "get" requests to grab the data from each object, and append them together to create a new fortune.
ex:

{
  "firsts" : [
    {"first": "You"},
    {"first": "Your friends"},
    {"first": "Your family"}
  ],
  "seconds" : [
    {"second": "should not"},
    {"second": "will"}
  ],
  "thirds" : [
    {"third": "drive home"},
    {"third": "eat chinese"},
    {"third": "laugh"},
  ]
}
