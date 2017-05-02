# NSS Cage Match

![Splashpage](https://raw.githubusercontent.com/mitchellblom/cageMatch/cage/classfighter1.png)

<hr>

## Summary
Compared Treehouse user data in a mock arcade game. Used **Promises** from online **JSON** files to asynchronously write and filter data on the **DOM**. **Bootstrap**, **jQuery** and **Grunt** used throughout. Truetype fonts and custom color scheme from background (Theme borrowed from Street Fighter II arcade game). Everything possible is in **ES6**.

<hr>

## To Access Necessary Libaries:
 - Pull down project
 - cd into lib
 - Run command "bower install"
 - Run command "npm install"

<hr>

## Requirements
1. Your site should have two inputs and a button
1. In the inputs you type in a treehouse username and then hit the button
1. Once the button is hit your code should
 - Make ajax requests to treehouse and return the profile
 - Example url = https://teamtreehouse.com/mitchellblom.json
 - Use Promise.all to return the two profiles at the same time
 - Display the profile pictures of the two profiles
 - Display the profile picture for each of the two profiles
 - Display the total number of points for each profile
 - Pick the cage match winner - the person with the most points
 - Clearly display who the winner is
 - Display the winners badges
 - Use jquery .animate method to apply animation to the images

Your code should:

 - Not have any grunt errors
 - Use es6 syntax - let, const, fat arrows
 - Show an user friendly message if no data comes back from treehouse - ie you type in a username that doesn't exist (hint: use .catch on your promise.all to catch the error from treehouse)
 - Have cool animations
 - Not be styled unless you have 100% functionality complete

<hr>
