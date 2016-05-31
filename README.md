#Serendipitous News

A news reader app offerring perspectives from around the world.

##How to start the app

###Install dependencies: 
- [ ] Install client dependencies by running `npm install` at /client
- [ ] Install api dependencies by running `npm install` at /server/api
- [ ] Intall static server dependencies by running `npm install` at root

####Static Server
- [ ] Navigate to root 
- [ ] Run npm install to install dependencies.

####Client
- [ ] Navigate to news/client
- [ ] Run npm install

###Start Static Server
- [ ] open terminal window
- [ ] navigate to news/server/static
- [ ] run `nodemon server.js`

###Start API Server
- [ ] open new terminal window
- [ ] navigate to news/server/api
- [ ] run `nodal s`

###Bootstrap Database: 
(loads seed data for publishers and channel)

- [ ] Run PostgreSQL
- [ ] Open new terminal windwo
- [ ] navigate to news/server/api
- [ ] run `nodal db:bootstrap`

###Populate Articles Table:
Target the following endpoint from Chrome - `http://localhost:8085/test`

__This will populate the articles database with the following:__
- NY Times: US News channel
- Times of India: World channel
- Al Jazeera: Al Jazeera America channel
- BBC: US 2016 Election channel

###Complie client side code:
- [ ] Navigate to /client
- [ ] run `npm start`

You can now open localhost:8085/ and load the index.html page



##Query Strings for Ajax calls
Query for returning all articles with a particular keyword
`localhost:3000/v1/art_keys?keyword__keyword__icontains=['KEYWORD']`

Query for returning all articles from a particular publisher
`localhost:3000/v1/articles?publisher__name=['NAME']`

Qeury all articles
`localhost:3000/v1/articles`

Query all articles from a region
`localhost:3000/v1/articles?publisher__region=['REGION']`
