# Video Game Sales Dashboard

## Table of contents

- [Video Game Sales Dashboard](#video-game-sales-dashboard)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [What and Who is this website for?](#what-and-who-is-this-website-for)
  - [UX](#ux)
    - [Retailer Persona](#retailer-persona)
    - [Actions the persona may carry out](#actions-the-persona-may-carry-out)
    - [Mockups](#mockups)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Technologies Used](#technologies-used)
  - [Testing](#testing)
    - [Scenario One: Dashboard Tour](#scenario-one-dashboard-tour)
      - [Scenario Steps](#scenario-steps)
      - [Desired Outcomes](#desired-outcomes)
    - [Scenario Two: Clickable charts and selectors that interact with each other.](#scenario-two-clickable-charts-and-selectors-that-interact-with-each-other)
      - [Scenario Steps](#scenario-steps)
      - [Desired Outcomes](#desired-outcomes)
    - [Scenario Three: Interactive Data Table](#scenario-three-interactive-data-table)
      - [Scenario Steps](#scenario-steps)
      - [Desired Outcomes](#desired-outcomes)
    - [Scenario Four: Reset all charts Nav Bar Link](#scenario-four-reset-all-charts-nav-bar-link)
      - [Scenario Steps](#scenario-steps)
      - [Desired Outcomes](#desired-outcomes)
    - [Scenario Five: Data Table Nav Bar Link](#scenario-five-data-table-nav-bar-link)
      - [Scenario Steps](#scenario-steps)
      - [Desired Outcomes](#desired-outcomes)
    - [Scenario Six: Mobile Responsive charts](#scenario-six-mobile-responsive-charts)
      - [Desired Outcome](#desired-outcome)
      - [Issue Encountered](#issue-encountered)
    - [Scenario Seven: Metric Numbers Showing Negative Values](#scenario-seven-metric-numbers-showing-negative-values)
      - [Issued Encountered](#issued-encountered)
      - [Solution](#solution)
  - [Deployment](#deployment)
    - [Heroku Setup](#heroku-setup)
    - [MongoDB with Heroku Addons](#mongodb-with-heroku-addons)
  - [Credits](#credits)
    - [Content](#content)
    - [Acknowledgements](#acknowledgements)

## Overview

### What and Who is this website for?

This is my Stream Two project for [Code Institute](https://www.codeinstitute.net/). The project scope is to create a data dashboard using the technologies we have learned in Stream Two. This interactive Dashboard displays data on video game sales between the years 1976 - 2018.

## UX

The dashboard could be used by one of the following personas:

- A gamer who just wants to find out some video game data for fun.
- A retailer who may want to view the data to improve their knowledge of the sales data during this time in order to improve sales within their own shop.
- Someone from the Industry who like the retailer may want to view the data to improve their knowledge of the sales data during this time in order to improve insight into what games to develop or focus on in the future.

To begin with I focused on one type of persona rather than many. If the dashboard allowed me to focus on more than one persona I would focus on their needs as the dashboard evolved. The project in its final state aims to focus on the retailer persona. The persona I created is below.

### Retailer Persona

- **Fictional name:** Zach Smith
- **Age:** 35
- **Education:** Business Degree from University
- **Ethnicity:** White British
- **Family Status:** Married, no children
- **Job title:** Regional Manager for Video Game Store
- **Major Responsibilities:** Ensures that stores are meeting budgets set by head office. Makes decisions on what games are sold in which stores.
- **IT/ domain experience:** Good, Can use a computer competently
- **Personality:** Easy going but likes to be efficient with work flows
- **The goals and tasks they are trying to complete using the site:** Zach wants to see what platforms and genres are most popular within a given year. He also wants to see how sales compared between different countries.
- **Frequency of use:** how often are they likely to use the site: On a regular basis as this will provide insights to what games stores should be stocking.
- **A quote that sums up what matters most to the persona as it relates to your site:** Zach wants an efficient way to collate data on video game sales within different countries.

### Actions the persona may carry out

- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see the total number of EU sales.
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see the total number of Japan sales.
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see the total number of games in the data collection.
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see the total number of global sales.
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see the total number of North American Sales.
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see which publishers sold the most games in a particular year.
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to know what year sold the most games
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see what platform the most games were sold on.
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see what genre sold the most games.
- As a Area Manager for a retail store who wants to find out about video games sales, I'd like to see a map to visualize what countries the games were sold in.

### Mockups

I also created some mockups of the site which can be viewed in the folder named 'mockups' of this GitHub repository.

## Features

### Existing Features

- loading page whilst data loads, this prevents visitors from thinking the webpage is broken.
- There are six metrics, five for EU, North America, Japan, Global and other sales and one that denotes the total number of games in the collection. This allows the user to see figures based on these categories and can manipulate them depending on what factors they choose in the charts.
- The year of sales chart allows the user to see the total number of games sold in a particular year and can interactive with the chart to display different data depending on what year(s) they choose.
- The genre chart allows the user to see the total number of games sold in a particular genre and can interactive with the chart to display different data depending on what genre(s) they choose.
- The platform chart allows the user to see the total number of games sold on a particular platform and can interactive with the chart to display different data depending on what platform(s) they choose.
- The publisher select menu allows the user to see the total number of games sold by a particular publisher and can interactive with the chart to display different data depending on what publisher(s) they choose.
- The data table shows all of the data within the data set. The user can use the pagination links at the bottom of the table to scroll through the data and table will also change depending on what is selected from the charts.

### Features Left to Implement

- Mobile responsive charts.

## Technologies Used

- HTML5
  - This provides the basic layout of the webpage.
- CSS3
  - I have used some custom CSS to build on top of the styling provided by Bootstrap, introJs.css, dc.css and keen.css.
- [Bootstrap](http://getbootstrap.com)
  - I have used Bootstrap v3.2.0 to give my website a clean and responsive layout.
- JavaScript
  - I used some vanilla JS to get the pagination next and previous buttons working correctly. However the main bulk of the JavaScript makes use of the other JavaScript libraries included in this project.
- [crossfilter.js](https://square.github.io/crossfilter/)
  - I used v1.3.5 to manipulate the data and enable two way data binding.
- [d3.js](https://d3js.org/)
  - I use D3 v3.5.3 to render interactive charts and graphs based on the data I supplied.
- [dc.js](https://dc-js.github.io/dc.js/)
  - I use dc.js v2.1.10 to make plotting the charts easier. This was upgraded from the previously supplied v2.1.0. v2.1.10 included the `beginSlice` and `endSlice` functions to enable the data table pagination.
- [intro.js](https://introjs.com/)
  - I use intro.js v2.9.3 to create an onboarding process for the dashboard
- [keen.js](https://github.com/keen/dashboards)
  - Used in conjunction with bootstrap to build a dashboard template.
- [queue.js](https://github.com/d3/d3-queue)
- - Queue.js helps with the asynchronous functions within JavaScript.
- [Python](https://www.python.org/)
  - I used Python v2.7.15 along with the Flask micro framework and pymongo module to handle the connection to the MongoDB database, the app routing and template rendering.
- [Flask](http://flask.pocoo.org/)
  - I used Flask v1.0.2 to build a server that handles the interaction with MongoDB and render the templates. It also allowed me to use template inheritance which made it easier to manage the source code but also makes it easier to add in further functionality in the future if required.
- [pymongo](https://api.mongodb.com/python/current/)
  - I used pymongo v3.7.1 module which acted as the driver for the connection to the MongoDB database.
- [MongoDB](https://www.mongodb.com/)
  - I used MongoDB v4.0.0 to create a database that holds the data for the Video Game Sales dashboard.
- [Heroku](https://www.heroku.com/)
  - Used to deploy and host the dashboard.
- [gunicorn](http://gunicorn.org/)
  - Used for running HTTP servers on UNIX based operating systems as Heroku uses Ubuntu Server.
- [mLab](https://mlab.com/)
  - Heroku Addon for deploying MongoDB.

## Testing

For the dashboard I haven't automated any tests however I carried out scenario based tests to ensure that the site works as user may expect it to. The scenarios are listed below:

### Scenario One: Dashboard Tour

#### Scenario Steps

1.  From the home page click on the "Start tour" button.
2.  Navigated through the tooltips one at a time also checked that the "skip" button worked.
3.  Checked that each tooltip had the correct description.
4.  Checked that the tooltips were navigating in the correct order.

#### Desired Outcomes

If successful the user should be able to start the dashboard tour, navigate through each tooltip and learn about how the can interact with the dashboard.

### Scenario Two: Clickable charts and selectors that interact with each other.

#### Scenario Steps

1.  From the home page select some specific data factors from the charts i.e. platform, year etc.
2.  Check to see if the other charts and metrics have change when selecting these different data factors.
3.  Try selecting more data factors.
4.  Check to see if the other charts and metrics have change when selecting these different data factors.

#### Desired Outcomes

If successful the user should be able to click on the charts or selector and select specific details such as platform, year etc, they should also see the other charts respond to the change in data and see that the metrics are also changing.

### Scenario Three: Interactive Data Table

#### Scenario Steps

1.  From the home page, select some different data factors on the charts.
2.  Scroll down to the data table and see if the data in the table has changed in accordance to the selected data.
3.  Check to make sure that you can scroll through the data table pages using the previous and next buttons at the bottom of the table. On the first first page the previous button should be disabled and on the last page the next button should be disabled.

#### Desired Outcomes

If successful the user should be able to select different data factors and see that the board then only displays data relevant to the select data factors. They should also be able to scroll through the data table pages using the previous and next buttons at the bottom of the table.

### Scenario Four: Reset all charts Nav Bar Link

#### Scenario Steps

1.  From the home page, select some different data factors on the charts.
2.  Click on the "Reset all Charts" link in the top right hand corner.
3.  Check to see if the charts have been reset.

#### Desired Outcomes

The user should be able to select different data factors within the charts and then if required reset the charts back to their default view by click on the "Reset all Charts" link in the top right hand corner.

### Scenario Five: Data Table Nav Bar Link

#### Scenario Steps

1.  From the home page, click on the Data Table link in the top right hand corner of the navigation bar.
2.  Check that it takes you to the Data Table section of the page.

#### Desired Outcomes

Upon clicking the Data Table link in the Nav Bar they should be taken to the Data Table section of the page.

### Scenario Six: Mobile Responsive charts

#### Desired Outcome

The charts should fit the width of the `div` they are placed in and automatically resize when the use resizes the window or views it on different screen sizes.

#### Issue Encountered

The version of dc.js that is used in this project doesn't have the responsive functions built in. Therefore I tried the recommendation on Stack Overflow found [here](https://stackoverflow.com/questions/22292369/how-to-make-the-dc-js-charts-responsive) adapting it to my project. Like so:

```javascript
var chartWidth = document.getElementById("platformRowChartResize").offsetWidth;
window.onresize = function(event) {
  // var newPageWidth = document.getElementById("platform-row-chart-container").offsetWidth;
  platformChart.width(window.innerWidth * 0.5);
  platformChart.redraw();
};
```

However after testing several different properties for example `.innerWidth;` rather than `.offsetWidth;` I feel that this is a bug within the version of dc.js that I am using for this project. That being said the overall functionality of the dashboard is working really well and this doesn't effect the use.

### Scenario Seven: Metric Numbers Showing Negative Values

#### Issued Encountered

When the user selected some of the chart factors or a particular publisher from the publisher select menu some of the metrics displayed negative values. After several testing and seeking guidance from my mentor we arrived at the conclusion that it was to do with some of the sales values being a fraction.

#### Solution

My mentor advised using a custom number formatter using JavaScript's Math Object. I therefore implemented the following into my code taking inspiration from the explanation that my mentor had provided and used the following:

```javascript
// create a variable so we can call it later in .formatNumber()
var customNumFormat = function(d) {
  // create another variable that takes the number * 1000, rounds the number so there is no
  // numbers with decimal points and then it returns the absolute value.
  var newValue = Math.abs(Math.round(d * 1000));
  // if the newValue is less than 1000 we format it using the "d" format specifier.
  if (newValue < 1000) {
    return d3.format("d")(newValue);
  } else {
    // otherwise we use the ".3s" format specifier.
    return d3.format(".3s")(newValue);
  }
};
```

This resolved the issuse of displaying negative numbers.

## Deployment

### Heroku Setup

The project asks that you use Heroku to host your website or another hosting service. I chose Heroku as we had used that in a previous lesson and therefore had the tools necessary already to deploy the website to Heroku. The instructions to install Heroku can be found [here](https://devcenter.heroku.com/articles/heroku-cli). The guide below may seem similar to the one that Code Institute provide and that's because I followed this lesson to deploy my dashboard to Heroku.

1.  To being the deployment I used Heroku via the command line to provision some server space by running the command `heroku create`. Heroku then creates an app a with an address and git remote location.
2.  I then installed gunicorn from the command line from within my virtualenv by running the command `pip install gunicorn`.
3.  Then I made sure that all my dependencies had been added to a requirements.txt file. Whilst still in my virtualenv I ran the following command `pip freeze --local > requirements.txt`. `pip freeze` lists all the installed packages in a format that pip can use. The `--local` gives us a list of installed packages only within the virtualenv. The command `> requirements.txt` store the output into a file called **requirements.txt**.
4.  I then created a Procfile so that Heroku knew what to do with the application once it was deployed. I then added `web: gunicorn video_game_sales:app` This tells Heroku that we are going to run a web app and what module and flask app to run once the Procfile is detected. As I created this on a Linux system I didn't need to create Procfile.windows.
5.  Whilst MongoDB was running I ran from a new terminal window `heroku local` this then detected the Procfile.
6.  I then created anothe file called runtime.txt to specify the version of python, therefore, within the runtime.txt file I added `python-2.7.15`.
7.  I then headed over to **localhost:5000** to check that the application is still running as expected.
8.  I then added the Heroku git repository by running this command from the terminal `git remote add heroku <git-url-for-your-app>`. Following that I ran the following commands to push the code:

```
git add .
git commit -m "Initial deployment"
git push heroku master
```

Heroku will detect that we are using Python and it will create a virtualenv on the server. It will then install any dependencies listed in the requirements.txt.

9.  I then told Heroku to start a **dyno/worker** using this command: `heroku ps:scale web=1`. The **dyno/worker** is a thread that runs continuously in the background to keep the app running. The command also tells Heroku to change the amount of workers to 1 worker.
10. To test that the previous steps have been successful I ran `heroku open` in the terminal to check that the app launches.

### MongoDB with Heroku Addons

1.  I headed over to this [Heroku addons page](https://elements.heroku.com/addons/mongolab) and clicked Install mLab MongoDB. I then selected the app I wanted to install mLab for and was taken back to a page to select what plan I wanted and therefore selected the **Sandbox** plan and clicked on the **provision** button so that it provisions a server for me to host MongoDB on.
2.  I had to verify some payment details, once done I clicked on the **Provision** button once again to be taken to the app and from the resources tab I could see that the mLab addon was there.
3.  I clicked on the mLab MongoDB link which took me to the mLab Dashboard. I then clicked on the **Users** tab to create a new database user "root".
4.  From a new terminal window I ran command (amending it to include my user credentials) provided by mLab to connect to the mLab DB to check that I could connect successfully.
5.  I then created a new collection within mLab giving it the same name as the collection in my local MongoDB. I then restarted the Mongo session using the same command in step 4 and ran `show collections` to check that the collection I just made appears in the list. I then exited the Mongo shell using the exit command.
6.  I then imported the csv file containing the data by running the following command and adding in the fields that are specific to my database:

```
mongoimport -h <hostname> -d <dbname> -c <collectionname> -u <dbuser> -p <dbpassword> \
  --file opendata_projects_clean.csv --type csv --headerline
```

7.  I then checked that the data has been uploaded using Mongo Management Studio.
8.  I the altered the database details in my `video_game_sales.py` file so that Flask uses the new database rather than the local one. I also added `import os` to the top of the `video_game_sales.py` file and amended the `MONGO_URI` and `DBS_NAME` to include `os.getenv` so that Python can interactive with multiple underlying operating systems. By providing the mLab URI and database name in the environmental variables it means that the code can adpapt the environment its hosted on.
9.  I then found the MONGODV_URI and MONGO_DB_NAME, navigated to Heroku --> Reveal Config Vars and pasted in the key:value pairs and clicked add.
10. I then Amended the connection variable in `video_game_sales.py` and ran the file and checked it worked by opening it in the browser.
11. I then pushed the changes to Heroku by running the following commands:

```
git add video_game_sales.py
git commit -m "Connected to MongDB"
git push heroku master
```

12. I then ran `heroku open` from the command line and the dashboard successfully opened in the browser.

## Credits

### Content

- The data set for this dashboard was provided by Gregory Smith on [kaggle.com](https://www.kaggle.com) and the original data set can be found [here](https://www.kaggle.com/gregorut/videogamesales).
- The font was provided by [Google fonts](https://fonts.google.com/) and can be found [here](https://fonts.google.com/specimen/Press+Start+2P).
- All the icons were provided by [Font Awesome](https://fontawesome.com/).

### Acknowledgements

In my acknowledgements no code was copied from these sources and all code was written by me. These are a mention of people/websites that provided me with guidance and I was able to adapt the knowledge of their lessons into my own code.

- [Code Institute](https://www.codeinstitute.net/) and my Mentor for providing me the skills, inspiration and direction to build this Dashboard.
- [Robin Zigmond](https://github.com/robinzigmond). Robin provided me with direction when I was struggling to get certain aspects of the code working. None of the code is his, Robin just provided some excellent advice on my code when I got stuck for example if I was missing a semicolon on a certain line and then as if by magic my dashboard worked. Robin's Dashboard also provided me with inspiration for features like the loader he implemented whilst the data loaded and I like what Robin had done with his metrics.
- [Adil Moujahid](http://adilmoujahid.com/posts/2015/01/interactive-data-visualization-d3-dc-python-mongodb/) - His tutorial helped me realise what I was missing to display my charts.
- [w3schools: How To Make a Loader](https://www.w3schools.com/howto/howto_css_loader.asp) I followed this lesson to build the loader whilst adapting it to my own style.
- I had some issues earlier on with a clickable bar chart and I found the solution here: [clickable bar charts not clickable if not dc.units.ordinal · Issue #168 · dc-js/dc.js · GitHub](https://github.com/dc-js/dc.js/issues/168).
- I found solution to setting the correct bar widths on StackOverflow: [javascript - Properly display bin width in barChart using dc.js and crossfilter.js - Stack Overflow](https://stackoverflow.com/questions/15191258/properly-display-bin-width-in-barchart-using-dc-js-and-crossfilter-js/36885768#36885768).
- I found out how to apply the reset all charts button here: [dc.js chart examples - bl.ocks.org](http://bl.ocks.org/d3noob/6584483).
- I found out how to apply pagination to the data table from this tutorial: [Tutorial #13 Dive into DC.JS a JavaScript Library - Data Table Pagination — Steemit](https://steemit.com/utopian-io/@faad/tutorial-13-dive-into-dc-js-a-javascript-library-data-table-pagination)
