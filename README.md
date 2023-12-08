# EcommerceBE
EcommerceBE is a REST API for a retail website built on an express.js server to interact with a mysql database. This ecommerce back end has routes that can be used to create,view,establish, update and delete all products, categpries and tags.
## Installation
To install this application after cloning repo we install npm packages:
`npm install`
Also create a .env file to store databse information:
```
DB_NAME=ecommerce_db
DB_PASSWORD=
DB_USER=
```
## Usage
After filling in database info in .env file we must source the databse using mysql.(source db/schema.sql). Then you must seed database by running `npm run seed` to populate database. You can now succesfuly start server by running `npm start` and make requests using insomnia.
## Demonstration video
https://drive.google.com/file/d/196fsgNYc6XnoY2r2yI2n8Ypnboa5GN7E/view?usp=sharing