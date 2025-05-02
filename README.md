# Music Album App

A React Native application that displays a collection of music albums with their details.

## Features

- Display album information including title, artist, year, and genre
- Modern UI with album cover images
- Responsive design
- Backend API for album data

## Project Structure

```
├── frontend/           # React Native app
│   └── Homepage.jsx   # Main album display component
├── server/            # Backend server
│   ├── server.js     # Express server
│   └── package.json  # Server dependencies
└── temp.json         # Album data
```

## Setup

1. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
```

2. Start the server:
```bash
cd server
npm run dev
```

3. Start the React Native app:
```bash
npm start
```

## API Endpoints

- `GET /api/albums` - Get all albums
- `GET /api/albums/:id` - Get a specific album by ID

## Technologies Used

- React Native
- Express.js
- Node.js 