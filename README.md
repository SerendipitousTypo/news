#Serendipitous News

A news reader app offerring perspectives from around the world.

##How to start the app

###Install dependencies: 
- [ ] Install client dependencies by running `npm install` at /client
- [ ] Install api dependencies by running `npm install` at /server/api
- [ ] Intall static server dependencies by running `npm install` at root
- [ ] If you do not have elastic search - See instructions 

####Installing Elastic Search - MAC 
+ `brew update`
+ `brew install elasticsearch`
    * You may be prompted to install java, if so follow the brew instructions to install java then try `brew install elasticsearch` again.

###Bootstrap Database: 
(loads seed data for publishers and channel)

- [ ] Run PostgreSQL
- [ ] Open new terminal window
- [ ] navigate to news/server/api
- [ ] run `nodal db:bootstrap`

###Start Static Server 
- [ ] open terminal window
- [ ] navigate to news/server/static
- [ ] run `nodemon server.js`

###Start API Server 
- [ ] open new terminal window
- [ ] navigate to news/server/api
- [ ] run `nodal s`

###Start Elastic Search
- [ ] open a new terminal window
- [ ] type `elasticsearch` and press enter


You can now open localhost:8085/ and load the index.html page

##Query Strings for Ajax calls
Query for returning all articles from a particular publisher
`localhost:3000/v1/articles?publisher__name=['NAME']`

Qeury all articles
`localhost:3000/v1/articles`

Query all articles from a region
`localhost:3000/v1/articles?publisher__region=['REGION']`

Query string for elasticsearch
`localhost:3000/v1/search?q=[your query string here]`
* Note: a string with multiple words is an OR
search.  To do an AND search separate each word with AND.  For example, searching for 'election' or 'trump' would look like this
`localhost:3000/v1/search?q=election trump`
whereas a search for election and trump would look like this
`localhost:3000/v1/search?q='election AND trump'`