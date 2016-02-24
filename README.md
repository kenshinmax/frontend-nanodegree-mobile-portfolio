## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2-A: Optimize Frames per Second in pizza.html

- Modified `function updatePositions()` to set global animate variable and perform calulcations outside of the loop
- Updated logic to use transform and translateX when looping through items in array (for background pizzas)
- Updated the use of querySelectorAll to directly calling elements (getElementById and getElementsByClassName) to enhance function

####Part 2-B: Optimizing changePizzasSizes Slider

- Event handler now iterates through pizza elements on the page and changes their width (elem.style.width)
- Updated the selector to getElementsByClassName to optimize the selection of elements on the page
- Using a global variable (randomPizzaContainer) so that there is no need to look up this value during iteration
