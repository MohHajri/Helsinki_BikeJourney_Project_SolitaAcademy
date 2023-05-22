# Bike Journeys - Frontend

This is the frontend repository for the **Bike Journeys** application.

## Setup and Run

Follow the instructions below to set up and run the frontend project on your machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine.


2. Navigate to the project directory.

<br>
<br>

### Configuration

1. In the project directory, create a `.env` file.

2. Add the following environment variable to the `.env` file and customize it as needed:

    `REACT_APP_API_BASE_URL=http://localhost:8080`


    Replace `http://localhost:8080` with the base URL of your backend API.

<br>

### Running the Application

1. Start the development server.

    `npm start`

2. Open your web browser and visit `http://localhost:3000` to access the application.

<br>

## Project Structure

    bike-journeys/
    |- backend/
    |- src/
    |- main/
    |- java/
    |- resources/
    |- test/
    |- pom.xml
    |- README.md
    |- frontend/
    |- public/
    |- src/
    |- components/
    |- pages/
    |- api/
    |- utils/
    |- styles/
    |- App.js
    |- index.js
    |- .env
    |- README.md


<br>


## API Requests

Append the endpoint with the root URL of the backend application.

Refer to the Backend README for a detailed list of available API endpoints, request methods, parameters, and responses.

## Entities

Refer to the Backend README for information about the entities used in the project.

## Features

The **Bike Journeys** application provides the following features:

- **Landing Page**: Provides an overview of the application and its features.
- **Bike Trips**: Allows users to view, create, and manage bike trips.
- **Station Hub**: Provides information about bike stations, including total departures, total arrivals, average departure distance, average arrival distance, and top departure and return stations.
- **Create Bike Trip**: Allows users to create and save new bike trips through a form.
- **404 Page**: Displays a "Not Found" page for any unknown routes.

<br>

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: Library for routing and navigation in a React application.
- **Axios**: HTTP client for making API requests.
- Leaflet: Library for interactive maps.
- **CSS**: Styling and design of the application.


<br>
<br>

## Snippets
<br>

![alt text](src\assets\snippets\bike_snippet_1.png)

![alt text](src\assets\snippets\bike_snippet_2.png)

![alt text](src\assets\snippets\bike_snippet_3.png)

![alt text](src\assets\snippets\bike_snippet_4.png)

![alt text](src\assets\snippets\bike_snippet_5.png)