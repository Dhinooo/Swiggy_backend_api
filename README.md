# Swiggy Backend API

A REST API for managing restaurant records, built with **Node.js**, **Express 5**, **Prisma ORM**, and **PostgreSQL**.

## Tech Stack

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Postman (API testing)

## Features

| Method | Endpoint | Description |
|---|---|---|
| GET | `/restaurants` | Retrieve all restaurants |
| POST | `/restaurants` | Create a restaurant |
| PUT | `/restaurants` | Update a restaurant using `restaurant_id` |
| DELETE | `/restaurants` | Delete a restaurant using `restaurant_id` |

A health-check endpoint is also available at `GET /`.

## Prerequisites

- Node.js (LTS recommended)
- npm
- A PostgreSQL database
- Git

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Dhinooo/Swiggy_backend_api.git
   cd Swiggy_backend_api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local `.env` file in the project root. Do not commit this file.

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require"
   ```

   Replace the placeholders with your own PostgreSQL connection details. Keep credentials private.

4. Generate the Prisma Client and sync the Prisma schema with your database:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Start the API:

   ```bash
   npm run dev
   ```

   Or use:

   ```bash
   npm start
   ```

The server listens on **http://localhost:3000**.

## API Usage

Set the Postman base URL to:

```
http://localhost:3000
```

### 1. Health Check

- **Method:** GET
- **URL:** `/`
- **Expected response:** `API's Working`

### 2. Get all restaurants

- **Method:** GET
- **URL:** `/restaurants`
- **Success response:** JSON array of restaurant records.

### 3. Create a restaurant

- **Method:** POST
- **URL:** `/restaurants`
- **Header:** `Content-Type: application/json`
- **Example body:**

  ```json
  {
    "id": "restaurant-record-001",
    "restaurant_id": "REST101",
    "image_url": "https://example.com/restaurant.jpg",
    "title": "Example Restaurant",
    "rating": "4.5",
    "tag": "South Indian"
  }
  ```

Use a unique `id` and `restaurant_id`. The `restaurant_id` field is unique in the Prisma schema.

### 4. Update a restaurant

- **Method:** PUT
- **URL:** `/restaurants`
- **Header:** `Content-Type: application/json`
- **Example body:**

  ```json
  {
    "restaurant_id": "REST101",
    "id": "restaurant-record-001",
    "image_url": "https://example.com/updated-restaurant.jpg",
    "title": "Updated Restaurant Name",
    "rating": "4.7",
    "tag": "Vegetarian"
  }
  ```

The `restaurant_id` must already exist. This implementation sends all listed fields to Prisma's update operation.

### 5. Delete a restaurant

- **Method:** DELETE
- **URL:** `/restaurants`
- **Header:** `Content-Type: application/json`
- **Example body:**

  ```json
  {
    "restaurant_id": "REST101"
  }
  ```

The API responds with a success message after deletion.

## Postman Screenshots

Add genuine screenshots captured from your local Postman run to `docs/postman/` using these filenames:

| Operation | Screenshot |
|---|---|
| GET all restaurants | `docs/postman/get-restaurants.png` |
| POST create restaurant | `docs/postman/post-restaurant.png` |
| PUT update restaurant | `docs/postman/put-restaurant.png` |
| DELETE restaurant | `docs/postman/delete-restaurant.png` |

Screenshots are intentionally not fabricated. Capture the actual request, status code, and response body after running the API, then save each image with the filename above.

## Project Structure

```
Swiggy_backend_api/
├── docs/
│   └── postman/
├── prisma/
├── .env.example
├── .gitignore
├── index.js
├── package.json
├── schema.prisma
└── README.md
```

## Security

- Never commit `.env` or paste database credentials into source code, screenshots, issues, or chat.
- Use `.env.example` only for placeholder variable names and formats.
- If a credential was ever committed or shared, rotate/revoke it at your database provider. Removing the file from the latest commit does **not** erase it from Git history.
- Keep production secrets in your hosting provider's environment-variable settings.

## License

This project is currently marked as ISC in `package.json`.
