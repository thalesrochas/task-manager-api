# Task Manager API

Developed API with learning purpose of routing and request handling in NodeJS.

## Start Server

    $ npm run dev

## Routes

### Create task

`POST /tasks` creates a new task

**Request body:**

- `title`: the task title
- `description`: the task detailed description

Example:

```json
{
  "title": "Feed the cat",
  "description": "Feed the cat and make it purr"
}
```

**Responses:**

- `201`: created
- `400`: error

Example:

```json
{
  "error": "`title` and `description` required!"
}
```

### List tasks

`GET /tasks` lists all tasks

**Response:**

- `200`: tasks listed

Example:

```json
[
  {
    "id": "15be1269-2912-4289-826f-ccb924ee628a",
    "title": "Feed the cat",
    "description": "Feed the cat and make it purr",
    "completedAt": null,
    "createdAt": "2023-08-20T01:41:18.416Z",
    "updatedAt": "2023-08-20T01:52:36.772Z"
  },
  {
    "id": "29daa34a-fefb-47f4-8f44-444734a034be",
    "title": "Coffee!!",
    "description": "Drink coffee to stay awake",
    "completedAt": "2023-08-20T01:55:13.411Z",
    "createdAt": "2023-08-20T01:42:59.585Z",
    "updatedAt": "2023-08-20T01:55:13.411Z"
  }
]
```

### Update task

`PUT /tasks/:id` creates a new task

**Request body:**

- `title`: the task title
- `description`: the task detailed description

Example:

```json
{
  "title": "Feed the dog",
  "description": "Feed the dog and make it happy"
}
```

**Responses:**

- `204`: updated
- `400`: error
- `404`: not found

Examples:

```json
{
  "error": "`title` and `description` required!"
}
```

```json
{
  "error": "Id not found!"
}
```

### Delete task

`DELETE /tasks/:id` deletes a task

**Responses:**

- `204`: deleted
- `404`: not found

Example:

```json
{
  "error": "Id not found!"
}
```

### Complete task

`PATCH /tasks/:id/complete` marks a task as complete

**Responses:**

- `204`: completed
- `404`: not found

Example:

```json
{
  "error": "Id not found!"
}
```
