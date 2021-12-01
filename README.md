# radium
Repository for backend cohort - Radium
Phase II
Add authentication and authroisation feature
POST /login
Allow an author to login with their email and password. On a successful login attempt return a JWT token contatining the authorId
If the credentials are incorrect return a suitable error message with a valid HTTP status code
Authentication
Add an authorisation implementation for the JWT token that validates the token before every protected endpoint is called. If the validation fails, return a suitable error message with a corresponding HTTP status code
Protected routes are create a blog, edit a blog, get the list of blogs, delete a blog(s)
Set the token, once validated, in the request - x-api-key
Use a middleware for authentication purpose.
Authorisation
Make sure that only the owner of the blogs is able to edit or delete the blog.
In case of unauthorized access return an appropirate error message.
Testing
To test these apis create a new collection in Postman named Project 1 Blogging
Each api should have a new request in this collection
Each request in the collection should be rightly named. Eg Create author, Create blog, Get blogs etc
Each member of each team should have their tests in running state