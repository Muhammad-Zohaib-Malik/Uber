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
