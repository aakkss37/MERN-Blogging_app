# Project Title: Blog Application
## Description
A full-featured blog website where users can create an account, login, and write blogs with a title and add pictures. The users have the ability to update their own blogs, change the display picture of their blogs, delete their own blogs and  filter blogs by category. The website is also multi-page, allowing users to navigate through different pages. Website is also handling 404 Error and show a beautiful no result found page. 

## Features
> - User Registration and Login/Logout
> - Create, read, update and delete blog posts
> - Add a title and picture to the blog post
> - Change the display picture of a blog post
> - Filter blog posts by category (movie, music, sports, tech, fashion)
> - Multi-page website with navigation to different categories
> - Securely store user information and authentication using JSON Web Tokens (JWT)

## Technologies Used
> - ReactJS for building user interface
> - Context API to store globle state
> - NodeJS for server-side scripting
> - Express for creating API routes
> - MongoDB for storing data
> - Mongoose for interacting with MongoDB
> - Axios for making HTTP requests
> - Axios interceptor for handling token refresh
> - JSON Web Tokens (JWT) for user authentication

## Getting Started
Clone the repository
1. Add your own **.env** file in the root directory of both client and server folders with the following variables:
> - *ACCESS_TOKEN_SECRET*
> - *REFRESH_TOKEN_SECRET*
> - *DATABASE_URL (for MongoDB)*
2. Run npm install in both the client and server folders to install all the dependencies
3. Run npm start in both the client and server folders to start the development server
4. The Client should be running on http://localhost:3000
5. The Client should be running on **PORT:8000**

### Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/fooBar)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature/fooBar)
5. Create a new Pull Request


## Disclaimer
***This is a sample readme file, it is not meant to be used for any real world project and it is not complete or accurate. It is recommended to adjust it according to your project requirements and best practices.***
