#Serendipitous News

A news reader app offerring perspectives from around the world.

##How to start the app

###Install dependencies: 
- [ ] navigate to the root directory and run `npm deps`
- [ ] If you do not have elastic search - See instructions for installing Elastic search 
- [ ] Install postrgres

####Installing Elastic Search - MAC 
+ `brew update`
+ `brew install elasticsearch`
    * You may be prompted to install java, if so follow the brew instructions to install java then try `brew install elasticsearch` again.

###Starting the app: You will need to leave 3 terminal windows running
- [ ] Start your postgres database
- [ ] Open a terminal window and navigate to the root file of the project
- [ ] run `npm run nodal` - this bootstraps the db and launches node
- [ ] Open a new terminal window and navigate to the root file of the project
- [ ] run `elasticsearch`
- [ ] Open a new terminal window and navigate to the root file of the project
- [ ] run `npm start` 

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