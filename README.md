# news
repo for our greenfield project


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
