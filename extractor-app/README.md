# Keyword Extractor

A simple application that extracts relevant keywords based on a given word or brand name. The project consists of a React frontend and an Express backend.

## Features

- Extracts keywords related to a given input.
- Mock data is used instead of an external API.
- Simple and fast keyword extraction.

## Tech Stack

- Frontend: React
- Backend: Express.js, Node.js
- Other: Axios, CORS

## Installation

### Clone the Repository

```sh
git clone https://github.com/your-repo/keyword-extractor.git
cd keyword-extractor
```

### Install Dependencies

#### Backend

```sh
cd keyword-extractor-backend
npm install
```

#### Frontend

```sh
cd ../keyword-extractor-frontend
npm install
```

## Running the Application

### Start the Backend Server

```sh
cd keyword-extractor-backend
npm start
```

The backend runs on `http://localhost:5000`.

### Start the Frontend

```sh
cd ../keyword-extractor-frontend
npm start
```

The frontend runs on `http://localhost:3000`.

## API Endpoints

### `POST /api/keywords`

Extracts keywords based on user input.

#### Request Body

```json
{
  "input": "Nike"
}
```

#### Response

```json
{
  "keywords": ["sports", "shoes", "lifestyle", "running"]
}
```

## Notes

- Currently, the API returns **mock data**.
- Future enhancements may include integrating an AI-powered keyword extractor.

## License

This project is open-source and available under the MIT License.
