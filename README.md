# BlogAPI

BlogAPI is a Node.js Application utilizing Express, Mongoose, and MongoDB to demonstrate a RESTful API.  DotEnv and a .env file is also included to show the use of a .env file containing environment variables.  No important information is stored here such as AWS Keys, Passwords, or any other secrets. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This is not intended to run on a production system.  

### Prerequisites

To use and run BlogAPI you must have [Node.js](https://nodejs.org/en/download/) installed, npm (included with Node.js) or [yarn package manager.  ](https://yarnpkg.com/getting-started/install)     &nbsp; MongoDB is also required, installation instructions can be found [here.](https://docs.mongodb.com/manual/installation/)

To begin using BlogAPI clone the repo locally using the command below:
```
HTTPS:

git clone https://github.com/robbyandrews/blogapi.git

SSH:

git@github.com:robbyandrews/blogapi.git

```

You can also download the zip file [here.](placeholder.htm) &nbsp; If you choose the zip file method, extract the archive.

### Installing

In the folder you have cloned or where you have extracted your zip file, install your dependencies. 

**Node:**
```
npm i
```

**Yarn:**
```
yarn install
```

Your dependencies are now installed and you are ready to begin using the application. 

## Running the Application

We recommend using `nodemon` to run BlogAPI so that any changes you make while running your application.  Nodemon can be installed globally with npm.
```
npm i -g nodemon
```

Start the application
If `nodemon` is installed:
```
npm run devStart 
 
 or

nodemon server.js
```

## Using BlogAPI:

### Data Model

BlogAPI utilizes Express routes and MongoDB to store and retrieve data. 
Currently the Model utilized by mongoose and MongoDB to store blog data is the following:
```JavaScript
    author:{
type: String,
required: true
    },
    content:{
type: String,
required: true
    },
    postDate:{
type: Date,
required: true,
default: Date.now
    }


})

```

## Routes
Currently there are the following routes, all served with `Content-Type: application/json` which means that a JSON object should always be the expected result, even when an error occurs:

**GET All Blogs in the Database:**
```HTTP
GET /blogs
```
This will return all of the objects in the database. If the database is empty and no objects exist, then an empty array will be sent. 

**GET Blog by id:**
```HTTP
GET /blogs/:id
```
All objects stored in the database are given an id as an attribute. By utilizing the id in the URL you can retrieve a given object specified by its id attribute.

**Create a blog entry using POST:**
```HTTP
POST /blogs
Content-Type: application/json

{
    "author":"John Doe",
    "content": "This is my first post"
}
```
To create a blog entry using the POST method, the body must contain a JSON object with the required keys of `author: string` and `content: string`. Two other key value pairs will be generated automatically: the id value which is created by MongoDB to identify docuemnts, and a postDate which is the value of the JavaScript function `Date.now`.


**Update a blog entry by id using PATCH** 
```HTTP
PATCH /blogs/:id
Content-Type: application/json

{
    "author":"Updated Name",
    "content": "Updated Content"
}
```
Using the `PATCH` method along with a JSON body and the id of the desired post, you can update the post with a new author, and/or new content.  A `PATCH` method was chosen over `PUT`  as the `PUT` method will replace the entire URI request, and `PATCH` will only replace the chosen items.


**Delete a blog entry by id using DELETE** 
```HTTP
DELETE /blogs/:id


```
A post may be deleted using the `DELETE` method and it's corresponding id.

### Future work
Try adding more routes, expand the schema to allow for more attributes in the documents.  Add routes to find posts by an author, or even search content. 

