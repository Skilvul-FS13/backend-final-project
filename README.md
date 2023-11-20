### Table of Content

- [Green World Aware API](#green-world-aware-api)
  - [Features](#features)
  - [API Installation](#api-installation)
  - [API Reference](#api-reference)
    - [Authorization](#authorization)
    - [Endpoint](#endpoint)
    - [Get users](#get-users)
    - [Get posts](#get-posts)
    - [Get comments](#get-comments)
    - [Get likes](#get-likes)
    - [Get news](#get-news)
    - [Get categories](#get-categories)
    - [Get petitions](#get-petitions)
    - [Get signatures](#get-signatures)

# Green World Aware API

Green World Aware API is an API built with Express js and Sequelize. This documentation serves as a comprehensive guide to help developers seamlessly integrate and leverage the capabilities of our API in their applications.

We recommend to test API using Postman.
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)

## Features

- User
- Post
- Likes
- Comments
- Categories
- News
- Petitions
- Signatures

## API Installation

To run the API in your local machine, follow these steps: Clone the repository to your machine and install the needed dependencies. We use `npm` to manage our packages, so please make sure it is installed in your local machine.

```bash
git clone https://github.com/Skilvul-FS13/backend-final-project.git

cd backend-final-project

npm install
```

To start a server use this command:

```bash
npm run dev
```

After your application successfully installed we recommend you to do migration and seed(optional).

```bash
# migrate

npx sequelize-cli db:migrate
```

You can also undo migration.

```bash
# undoing migration

npx sequelize-cli db:migrate:undo
```

You can revert back to the initial state by undoing all migrations with the db:migrate:undo:all command. You can also revert back to a specific migration by passing its name with the --to option.

For example:

```bash
# undoing all migration until user model

npx sequelize-cli db:migrate:undo:all --to 20231118065259-create-user.js
```

For seeding, you can use these commands:

```bash
# seed all

npx sequelize-cli db:seed:all
```

You can also undo seed

```bash
# undo all seed

npx sequelize-cli db:seed:undo:all

# undo recent seed

npx sequelize-cli db:seed:undo

# undo specific seed

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

## API Reference

#### Authorization

To authenticate an API request, you should provide your token key in the `Authorization` header.

```bash
POST {baseUrl}/users/login
```

#### Endpoint

```bash
# BaseURL
backend-final-project-fs13.vercel.app

or if running locally

http://localhost:3000
```

#### Get users

```bash
# Method and Endpoint

GET /users
```

| Method | Endpoint          | Description                        |
| :----- | :---------------- | :--------------------------------- |
| `GET`  | `/users`          | Get all users                      |
| `GET`  | `/users/:id`      | Get user by id                     |
| `GET`  | `/users/:id/post` | Get post by user id                |
| `POST` | `/users/login`    | Get user token                     |
| `POST` | `/users`          | Create new user                    |
| `PUT`  | `/users/:id`      | `require authentication` Edit user |

#### Get posts

```bash
# Method and Endpoint

GET /post
```

| Method   | Endpoint     | Description                              |
| :------- | :----------- | :--------------------------------------- |
| `GET`    | `/posts`     | Get all posts                            |
| `GET`    | `/posts/:id` | Get post by id                           |
| `POST`   | `/posts`     | `require authentication` Create new post |
| `PUT`    | `/posts/:id` | `require authentication` Edit post       |
| `DELETE` | `/posts/:id` | `require authentication` Delete post     |

#### Get comments

```bash
# Method and Endpoint

GET /comments
```

| Method   | Endpoint        | Description                                 |
| :------- | :-------------- | :------------------------------------------ |
| `GET`    | `/comments`     | Get all comments                            |
| `GET`    | `/comments/:id` | Get comment by id                           |
| `POST`   | `/comments`     | `require authentication` Create new comment |
| `PUT`    | `/comments/:id` | `require authentication` Edit comment       |
| `DELETE` | `/comments/:id` | `require authentication` Delete comment     |

#### Get likes

```bash
# Method and Endpoint

GET /likes
```

| Method   | Endpoint     | Description                                 |
| :------- | :----------- | :------------------------------------------ |
| `GET`    | `/likes`     | Get all likes                               |
| `POST`   | `/likes`     | `require authentication` Create new comment |
| `DELETE` | `/likes/:id` | `require authentication` Delete comment     |

#### Get news

```bash
# Method and Endpoint

GET /news
```

| Method   | Endpoint    | Description                              |
| :------- | :---------- | :--------------------------------------- |
| `GET`    | `/news`     | Get all news                             |
| `GET`    | `/news/:id` | Get news by id                           |
| `POST`   | `/news`     | `require authentication` Create new news |
| `PUT`    | `/news/:id` | `require authentication` Edit news       |
| `DELETE` | `/news/:id` | `require authentication` Delete news     |

#### Get categories

```bash
# Method and Endpoint

GET /categories
```

| Method   | Endpoint          | Description                                  |
| :------- | :---------------- | :------------------------------------------- |
| `GET`    | `/categories`     | Get all categories                           |
| `GET`    | `/categories/:id` | Get category by id                           |
| `POST`   | `/categories`     | `require authentication` Create new category |
| `PUT`    | `/categories/:id` | `require authentication` Edit category       |
| `DELETE` | `/categories/:id` | `require authentication` Delete category     |

#### Get petitions

```bash
# Method and Endpoint

GET /petitions
```

| Method   | Endpoint         | Description                                  |
| :------- | :--------------- | :------------------------------------------- |
| `GET`    | `/petitions`     | Get all petitions                            |
| `GET`    | `/petitions/:id` | Get petition by id                           |
| `POST`   | `/petitions`     | `require authentication` Create new petition |
| `PUT`    | `/petitions/:id` | `require authentication` Edit petition       |
| `DELETE` | `/petitions/:id` | `require authentication` Delete petition     |

#### Get signatures

```bash
# Method and Endpoint

GET /signatures
```

| Method   | Endpoint          | Description                                   |
| :------- | :---------------- | :-------------------------------------------- |
| `GET`    | `/signatures`     | Get all signatures                            |
| `GET`    | `/signatures/:id` | Get signature by id                           |
| `POST`   | `/signatures`     | `require authentication` Create new signature |
| `DELETE` | `/signatures/:id` | `require authentication` Delete signature     |
