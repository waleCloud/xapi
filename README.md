# xapi - Easy Express API
[![Build Status](https://travis-ci.org/andela-git/senplate.svg?branch=master)](https://travis-ci.org/andela-git/senplate)
[![CircleCI](https://circleci.com/gh/andela-git/senplate.svg?style=svg)](https://circleci.com/gh/andela-git/senplate)
[![Maintainability](https://api.codeclimate.com/v1/badges/a37bd58403dc31ebe22e/maintainability)](https://codeclimate.com/github/andela-git/senplate/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a37bd58403dc31ebe22e/test_coverage)](https://codeclimate.com/github/andela-git/senplate/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/andela-git/senplate/badge.svg?branch=master)](https://coveralls.io/github/andela-git/senplate?branch=master)

A quick start template for bootstrapping a new NODE Express API application using sequelize as the ORM.

## Quick setup
* `git clone https://github.com/waleCloud/xapi.git`
* `cd xapi`
* `cp .env.example .env` - Listens on PORT 9000 by default.
* `npm install`
* `npm test` - To run tests
* `npm start` - Your app should be running on http://localhost:9000/

### Folder structure
- **app** [dir] - application folder
    -  **config** - `config.js`::sequelize configuration file 
    -  **controllers** - application controllers folder, app logic goes here
    -  **helpers** - helper scripts to ease repetitive tasks goes here.
    -  **migrations** - database migration files
    -  **models** - application database models definition goes here
    -  **routes** - application requests, requests format and definition goes
        -   to carefully house all your api routes file
        -   `hello.js` - hello default route (optional)
    -  **seeders** - database seeders folder
    -  `index.js` - Application entry point
- **test** [dir]
    - feature [dir]
    - unit [dir]
    - `test.js` 

Out of the box structure for building Node Express APIs, comes preconfigured with the following;
###Dependencies
* **body-parser** - Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property. [body-parser](https://github.com/expressjs/body-parser)
* **express** - Fast, unopinionated, minimalist web framework for node. [express-framework](https://github.com/expressjs/express)
* **morgan** - HTTP request logger middleware for node.js. [morgan](https://github.com/expressjs/morgan)
* **sequelize** - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server. It features solid transaction support, relations, read replication and more. [sequelize](http://docs.sequelizejs.com/)

#### Test framework
* **Mocha** - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. [mochajs](https://mochajs.org/)
* **Chai** - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. [chai](http://www.chaijs.com/)
* **chai-http** - HTTP integration testing with Chai assertions.[chai-http](http://www.chaijs.com/plugins/chai-http/)

### Licence
*     MIT

#### TODO
The project needs to be built into a CLI to npm tool such that with just one command, an install can be made.
something like;
* `npm install -g xapi`
* `xa create <app name>`
* `cd <app name>`
* `xa do controller User`
* `xa do model:migration User`
