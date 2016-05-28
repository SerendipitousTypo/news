###Populate database
Target this endpoint from Chrome and it will populate the database with NY Times World and Politics channels.
`http://localhost:8085/test`


###Query Strings for Ajax calls:
Query for returning all articles with a particular keyword
`localhost:3000/v1/art_keys?keyword__keyword__icontains=['KEYWORD']`

Query for returning all articles from a particular publisher
`localhost:3000/v1/articles?publisher__name=['NAME']`

Qeury all articles
`localhost:3000/v1/articles`


Query all articles from a region
`localhost:3000/v1/articles?publisher__region=['REGION']`

#Installation

SERVER

Run npm install to install dependencies.

!Important: npm install should be run twice from two different folders:
parent folder and server/api

Then from the API folder do the following

$ nodal db:create // create database
$ nodal db:prepare // wipes database
$ nodal db:migrate // runs progressive command to rebuild tables in database
$ nodal s // start server
The API server is listening on 3000

From static folder run nodemon server.js or npm start from root folder - this will listen on 8085


---------------------

CLIENT

Run npm install from client folder
Run npm start to start the server watch files for changes.

!Important: running nodemon will not work here, you actually need to run 
npm start

In total you should have three tabs in terminal
1) workers
2) host
3) client
