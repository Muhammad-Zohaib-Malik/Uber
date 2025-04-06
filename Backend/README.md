# User Registration API

This document provides details about the user registration functionality in the project, including the routes, request payload, and responses.

## Routes

### POST `/register`

This route is used to register a new user.

#### Request Body

The request body should be a JSON object with the following fields:

| Field       | Type   | Required | Description                              |
| ----------- | ------ | -------- | ---------------------------------------- |
| `firstname` | String | Yes      | The first name of the user (min 3 chars) |
| `lastname`  | String | Yes      | The last name of the user (min 3 chars)  |
| `email`     | String | Yes      | The email address of the user            |
| `password`  | String | Yes      | The password for the user (min 6 chars)  |

#### Example Request

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

Example Response
Success Response (<vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'>201</vscode_annotation> Created)

```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```
