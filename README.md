# tasks

REST API for tracking tasks and projects.

## Description
The application stores projects and related tasks. There is an option to give at most 100 tags to one task. Number of tasks in project is not limited. Moving task between projects is not supported.

Project has a name, description and start and ending date. Task has description and state - new, in progress or done. Tag has only a name.

There's also an option to filter tasks based on project, description, tag and in which state the task is. You can also limit the number of results or move between pages.
Suppose tasks numbered from one, this query will get you tasks number 21 - 40:
`/tasks?limit=20&page=2`. Or by this query you can search only for tasks with tag "bar": `/tasks?tag=bar`. Further information is in the API definition in the `openapi.yaml` file. Also database schema is described by the `db_layout.png` picture.

## Installation
The API was developed on Node.js version 18.13.0.
After cloning you need to create a `.env` file with database connection parameters with variables from example:
```
DB_USER=postgres
DB_PASS=postgres
DB_ADDRESS=localhost
DB_PORT=5432
DB_NAME=postgres
```
and run `npm install`.

## How to run
`npm start` for normal usage and `npm run debug` for development.