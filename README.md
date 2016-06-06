#Serendipitous News

A news reader app offerring perspectives from around the world. Our mission is to better inform our readers by providing a single location to get the whole worlds perspective on current events.

##Table of Contents
* [Team Members](#team-members)
* [Tech Stack, API's and Third-party Tools](#tech-stack-apis-and-third-party-tools)
* [Folder and File Structure](#folder-and-file-structure)
* [Setting up the Development Environment](#setting-up-the-development-environment)
* [Starting the app](#starting-the-app)
* [System Architecture](#system-architecture)
* [Database Schema](#database-schema)
* [API](#api)
* [Add Publishers](#add-publishers)
* [Worker Description](#worker-description)
* [License](#license)

##Team Members
[![Jonsa Sota](https://dl.dropboxusercontent.com/s/mqyqke84g66967l/jonassota.png?dl=0)](http://github.com/jonasms)

[![Elbert Lum](https://dl.dropboxusercontent.com/s/no2qvjt4pxry7g8/elbertlum.png?dl=0)](http://github.com/elbertlum)

[![Nick Lebedev](https://dl.dropboxusercontent.com/s/okywz1xvgrl63zm/nlebedev.png?dl=0)](http://github.com/nlebedev)

[![Tj Carskadon](https://dl.dropboxusercontent.com/s/yfzgicfwif8d5qo/tjcarskadon.png?dl=0)](http://github.com/tjcarskadon)

##Tech Stack, API's and Third-party Tools
* [React](https://facebook.github.io/react/) for rendering views and [Redux](https://github.com/reactjs/redux) for managing state
* [Material Design Lite](https://getmdl.io/)- a styling framework for google material design
* [React-MDL](https://tleunen.github.io/react-mdl/) - the React version of MDL
* [Node.js](https://nodejs.org/en/) and [Express](http://expressjs.com/) for serving static pages and services. 
* [Nodal](http://www.nodaljs.com/) for API 
* [Postgres](http://www.postgresql.org/) for database
* [ElasticSearch](https://www.elastic.co/) for search table
* [Open Calais](http://www.opencalais.com/) for term generation
* [Webpack](https://webpack.github.io/) & [Babel](https://babeljs.io/)


##Folder and File Structure
    news/
    |
    |--client/
        |
        |--app/
            |
            |--React / Redux
        |
        |--styles/
            |
            |--CSS/MDL
    |
    |--docs/
    |
    |--server/
        |
        |--api/
            |
            |--Nodal Server
        |
        |--static/
            |
            |--Node / Express server

##Setting up the Development Environment

##How to start the app

###Install dependencies: 
- [ ] navigate to the root directory and run `npm run deps`
- [ ] If you do not have elastic search - See instructions for installing Elastic search 
- [ ] Install postrgres

####Installing Elastic Search - MAC 
+ `brew update`
+ `brew install elasticsearch`
    * You may be prompted to install java, if so follow the brew instructions to install java then try `brew install elasticsearch` again.

####Get API Keys for Open Calias
* Got to http://www.opencalais.com/ and follow the instructions for accessing the api.  Note the limit for the free account is 5K requests per day.

###Starting the app
- [ ] Start your postgres database
- [ ] Open a terminal window and navigate to the root file of the project
- [ ] run `npm run nodal` - this bootstraps the db and launches node
- [ ] Open a new terminal window and navigate to the root file of the project
- [ ] run `elasticsearch`
- [ ] Open a new terminal window and navigate to the root file of the project
- [ ] run `npm start` 

- [ ] You can now open `http://localhost:8085/`

##System Architecture
![architecture](https://dl.dropboxusercontent.com/s/gsaspp0btg0igbv/System%20Architecture.PNG?dl=0)

##Database Schema
![schema](https://dl.dropboxusercontent.com/s/wjy81qvsaba89pv/DB%20Schema%20Design.PNG?dl=0)


##API 
Please see the [APIEndpoints.md](APIEndpoints.md) file

##Add Publishers
To add publishers and increase the amount of content available to users follow the below instructions.

* Open the seed.json file server/api/config
* Add name and region object to Publisher table `{"name": "China Daily", "region": "Asia"}`
* Add channel from publishers RSS
feed to the Channel table
 {"name": "USA", "publisher_id": "5", "url": "http://usa.chinadaily.com.cn/usa_kindle.xml"}
 * Shutdown the app and retstart following all startup instructions.  NPM
nodal start is the key step to make sure your db now includes the correct publishers

##Worker Description
There are five workers, or services running on in the background on the Node.js server.  Their source code is located in `server/static/services`.  Below is a description of their respective behaviors.

#####errors.js
This service logs all errors from the static server to a series of log files available at `server/static/logs`

#####master.js
This service runs every 120 seconds.  It reads the list of publishers and channels, makes a get request to each of those channels checking the last updated date if the last updated date is later than the last time this publisher was updated the master passes this information to parseBot.js and then updates the last_updated field in the database.

#####parseBot.js
This service receives instructions from master.js.  It gets all the articles listed in the publisher's  RSS feed and updates the articles table in the database with the new information.  parseBot.js also instructs topics.js to perform it's operations.

#####topics.js
This service interfaces with the Open Calais API.  This API reads the articles provided by topics.js and returns an array of topics that are related to the article. These topics get stored in the topics table, and the art_topics join table is updated.

#####snippetManager.js
This service runs every 120 seconds.  It makes a query to the database for any articles that don't have any content.  If any are found it then makes a query for the page text, slices the first 150 characters, and stores that in the content field in the database.

##License
MIT