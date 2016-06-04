##API Endpoints Documentation

####Query Endpoints
|Description|Endpoint
|---|---|
|[Index](#Index)|Index /|
|[Get all articles](#Get-all-articles)|GET /articles|
|[Get articles by publisher](#Get-articles-by-publisher)|Get /articles?|
|[Get articles by region](#Get-articles-by-region)|Get /articles?|
|[Get articles with limit](#Get-articles-with-limit)|Get /articles?|

####User Search Endpoints
|Description|Endpoint
|---|---|
|[Search articles single term](#Search-articles-single-term)|GET with single search term|
|[Search articles OR](#Search-articles-OR)|GET with multiple search as OR|
|[Search articles AND](#Search-articles-AND)|GET with multiple search as AND|

####Return Text of Articles
|Description|Endpoint
|---|---|
|[Article Text](#Article-Text)|GET all article text|


###Get all articles
####Example Request
`localhost:3000/v1/articles`

####Example Response
    {
      "meta": {
        "total": 381,
        "count": 381,
        "offset": 0,
        "error": null
      },
      "data": [
        {
          "title": "VIDEO: Would Sanders supporters back Clinton?",
          "date": "2016-04-04T23:49:20.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35962178#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Bernie Sanders has a passionate fanbase, but many who spoke to the BBC said they would support whomever won the Democratic nomination.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },
          "artTopics": []
        },
        {
          "title": "VIDEO: The union worker supporting Donald Trump",
          "date": "2016-03-08T00:05:32.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35748767#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Donald Trump is leading the polls in Michigan Republican primary - and his appeal may be broader than traditional Republicans.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },
          "artTopics": [
            {
              "topic": {
                "name": "Politics"
              }
            }
          ]
        },


###Get all articles by publisher
####Example Request
`localhost:3000/v1/articles?publisher__name=NY Times`

####Example Response
    {
      "meta": {
        "total": 33,
        "count": 33,
        "offset": 0,
        "error": null
      },
      "data": [
        {
          "title": "Donald Trump’s Rallies Attract Passion and Violence",
          "date": "2016-06-04T01:18:09.000Z",
          "url": "http://www.nytimes.com/2016/06/04/us/politics/donald-trump-protest.html?partner=rss&emc=rss",
          "content": "Protests inspired by social media turned violent outside a rally in San Jose, Calif., the result of a combustible mix of the candidate’s fiery oratory and the passion of the anti-Trump movement.",
          "publisher": {
            "name": "NY Times",
            "region": "North America"
          },
          "artTopics": []
        },
        {
          "title": "Hillary Clinton’s New Attack on Donald Trump Cheers Her Allies and Worries His",
          "date": "2016-06-03T21:39:56.000Z",
          "url": "http://www.nytimes.com/2016/06/04/us/politics/hillary-clinton-donald-trump.html?partner=rss&emc=rss",
          "content": "Mrs. Clinton showed the first indication of confronting an unconventional opponent, while Mr. Trump’s supporters have seen his unwillingness to adapt to the demands of a general election.",
          "publisher": {
            "name": "NY Times",
            "region": "North America"
          },
          "artTopics": []
        },

###Get all articles by region
####Example Request
`localhost:3000/v1/articles?publisher__region=Asia`

####Example Response
    {
      "meta": {
        "total": 326,
        "count": 326,
        "offset": 0,
        "error": null
      },
      "data": [
        {
          "title": "Waters still rising in Paris as rains taper off",
          "date": "2016-06-03T07:42:10.000Z",
          "url": "http://timesofindia.indiatimes.com/world/europe/Waters-still-rising-in-Paris-as-rains-taper-off/articleshow/52568141.cms",
          "content": "French officials say that the Seine River is still rising in Paris as France's unseasonable spate of rainfall begins to taper off. French President Francois Hollande has said that a \"natural disaster\" will be formally declared next week in a c​abinet meeting.",
          "publisher": {
            "name": "Times of India",
            "region": "Asia"
          },
          "artTopics": []
        },

###Get all articles with limit
####Example Request
`localhost:3000/v1/articles?__count=1`

####Example Response
    {
      "meta": {
        "total": 396,
        "count": 1,
        "offset": 0,
        "error": null
      },
      "data": [
        {
          "title": "VIDEO: Would Sanders supporters back Clinton?",
          "date": "2016-04-04T23:49:20.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35962178#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Bernie Sanders has a passionate fanbase, but many who spoke to the BBC said they would support whomever won the Democratic nomination.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },
          "artTopics": []
        }
      ]
    }


###Get all articles by region
####Example Request
`localhost:3000/v1/articles?q=clinton`

####Example Response
    {
      "meta": {
        "total": 396,
        "count": 396,
        "offset": 0,
        "error": null
      },
      "data": [
        {
          "title": "VIDEO: Would Sanders supporters back Clinton?",
          "date": "2016-04-04T23:49:20.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35962178#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Bernie Sanders has a passionate fanbase, but many who spoke to the BBC said they would support whomever won the Democratic nomination.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },
          "artTopics": []
        },
        {
          "title": "VIDEO: The union worker supporting Donald Trump",
          "date": "2016-03-08T00:05:32.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35748767#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Donald Trump is leading the polls in Michigan Republican primary - and his appeal may be broader than traditional Republicans.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },
          "artTopics": [
            {
              "topic": {
                "name": "Politics"
              }
            }
          ]
        },

###Get all articles by region
####Example Request
`localhost:3000/v1/articles?q=clinton trump`

####Example Response
    {
      "meta": {
        "total": 396,
        "count": 396,
        "offset": 0,
        "error": null
      },
      "data": [
        {
          "title": "VIDEO: Would Sanders supporters back Clinton?",
          "date": "2016-04-04T23:49:20.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35962178#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Bernie Sanders has a passionate fanbase, but many who spoke to the BBC said they would support whomever won the Democratic nomination.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },
          "artTopics": []
        },
        {
          "title": "VIDEO: The union worker supporting Donald Trump",
          "date": "2016-03-08T00:05:32.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35748767#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Donald Trump is leading the polls in Michigan Republican primary - and his appeal may be broader than traditional Republicans.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },


###Get all articles by region
####Example Request
`localhost:3000/v1/articles?q=clinton AND trump`

####Example Response
    {
      "meta": {
        "total": 396,
        "count": 396,
        "offset": 0,
        "error": null
      },
      "data": [
        {
          "title": "VIDEO: Would Sanders supporters back Clinton?",
          "date": "2016-04-04T23:49:20.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35962178#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Bernie Sanders has a passionate fanbase, but many who spoke to the BBC said they would support whomever won the Democratic nomination.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },
          "artTopics": []
        },
        {
          "title": "VIDEO: The union worker supporting Donald Trump",
          "date": "2016-03-08T00:05:32.000Z",
          "url": "http://www.bbc.co.uk/news/election-us-2016-35748767#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa",
          "content": "Donald Trump is leading the polls in Michigan Republican primary - and his appeal may be broader than traditional Republicans.",
          "publisher": {
            "name": "BBC",
            "region": "Europe"
          },
          "artTopics": [
            {
              "topic": {
                "name": "Politics"
              }
            }


###Article Text
####Example Request
`localhost:3000/v1/pages?url=http://www.bbc.co.uk/news/world-us-canada-31120958#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa`

####Example Response
    {
      "meta": {
        "total": 1,
        "count": 1,
        "offset": 0,
        "error": null
      },
      "data": [
        {
          "title": "US election 2016: Meet the candidates",
          "softTitle": "US election 2016: Meet the candidates",
          "date": "16 March 2016",
          "author": [
            "BBC News"
          ],
          "publisher": "BBC News",
          "copyright": "Image copyright AFP",
          "description": "The field of candidates having a White House run in 2016 is a wide one, although it's narrowing by the weeks. Here is a rundown.",
          "lang": "en",
          "canonicalLink": "http://www.bbc.co.uk/news/world-us-canada-31120958",
          "tags": [],
          "image": "http://ichef.bbci.co.uk/news/1024/media/images/80820000/jpg/_80820772_80820771.jpg",
          "videos": [],
          "text": "The field of candidates having a White House run in 2016 is a wide one, although it's narrowing by the weeks. Here is a rundown of who is, was and might be.\n\n* leads the polls nationally and wins in New Hampshire and South Carolina\n\n* a string of controversies include calling on a Muslim ban to US\n\n* accused Mexican immigrants of being criminals and rapists\n\n* shot to fame in 2014 by speaking in Senate for 21 hours against Obama healthcare law\n\n* won in Iowa, where he has huge evangelical support\n\n* former member of the House of Representatives\n\n* record of fiscal conservatism and experience with national security\n\n* his part in a bipartisan immigration reform package has cost him some right-wing support\n\n* became a popular conservative figure after National Prayer Breakfast speech in 2013\n\n* has likened Obamacare to slavery and doesn't believe in evolution\n\n* spent a few weeks atop the polls with Trump but since faded\n\n* brother to one ex-president, son of another\n\n* was Florida governor for eight years\n\n* criticised for a lacklustre campaign but more feisty in recent weeks\n\n* former boss of Hewlett Packard and executive at AT&T\n\n* was on cover of Fortune's Most Powerful Women issue in 1998\n\n* says she's running ....