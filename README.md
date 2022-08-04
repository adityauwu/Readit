
A Website where you can post recently asked interview questions , written using node.js / express.js / mongodb / passport.js

### Website:




### Features:
* Frontpage
* Subreddits
* Submitting comments / posts / links
* Voting on posts / comments
* Saving posts / comments
* Editing posts / comments
* Deleting posts / comments
* Subscribing
* Searching
* Sorting
* Profile pages
* Karma system
* Relative time
* Validation
* Login / Register
* Hash / salted passwords
* Change password / delete account
* API

### Images
<a href="https://imgur.com/lk6eX8z"><img src="https://i.imgur.com/lk6eX8z.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/5WnzDuc"><img src="https://i.imgur.com/5WnzDuc.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/kE8q5eJ"><img src="https://i.imgur.com/kE8q5eJ.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/3ihirEH"><img src="https://i.imgur.com/3ihirEH.png" title="source: imgur.com" /></a>







# API:
URL | Method | Details | Body
---- | ---- | ---- | ----
/api/frontpage | GET | Retrieves all posts from frontpage
/api/r/```subreddit``` | GET | Retrieves all posts from ```subreddit```
/api/post/```id``` | GET | Retrieves post by ```id```
/api/post/```id```/comments | GET | Retrieves all comments for post by ```id```
/api/u/```user``` | GET | Retrieves profile information about ```user```
/api/u/```user```/posts | GET | Retrieves all posts by ```user```
/api/u/```user```/comments | GET | Retrieves all comments by ```user```
/api/register | POST | Registers an account | ```username```, ```password```


