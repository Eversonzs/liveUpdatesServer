# liveUpdatesServer
Repository for the server of developer challenge about live updates.

# Contents

1. [Description](#Description)
2. [Prerequisites](#Prerequisites)
3. [Installation](#Installation)
3. [Author](#Author)

# Description

 Backend application using Nodejs, Express and postgreSQL.

# Prerequisites

- [NodeJs v12.14.1 or higher](https://nodejs.org/en/)
- [npm v6.13.4 or higher](https://www.npmjs.com/)

# Installation

To install this project on a local environment.

- Clone this repository.

```
   git clone git@github.com:Eversonzs/liveUpdatesServer.git
   cd liveUpdatesServer
   npm install
```

- Create .env file on your root folder with the following:

```
APP_NAME = live-updates-server
PORT = 5000
NODE_ENV = development
LOGGER_LEVEL = debug
POSTGRESQL_CONNECTION = { postgresql bd uri string }
API_USERNAME = { set username for server basic auth }
API_PASSWORD = { set password for server basic auth }
```

- Run this command to start the server with nodemon.

```
npm run server
```

# Data Base Required

- On your postgresql connection you need to exec the DDL script wich are on src/dbScripts/DDL.sql to create the schema and tables to run to project.

# Author
See the author of this project [contributors](https://github.com/Eversonzs/liveUpdatesServer/graphs/contributors)
