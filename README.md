# Weather App

This is a weather application built with **Next.js**. The app allows users to check the weather for any city. It fetches weather data from an external API and displays it in a user-friendly interface.

## Features

- Search for the weather by city name.
- Display current weather details like temperature, humidity, wind speed, and description.
- Show an icon representing the weather condition.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 14 or above) is installed. You can check if it's installed by running:

  ```bash
  node -v
  ```

  If you don't have Node.js installed, you can download and install it from [here](https://nodejs.org/).

- **npm** or **yarn** for managing dependencies. You can check if npm is installed by running:

  ```bash
  npm -v
  ```

  or if you are using yarn:

  ```bash
  yarn -v
  ```

  If npm or yarn isn't installed, you can install it by following the respective guide:

  - [npm installation](https://www.npmjs.com/get-npm)
  - [yarn installation](https://classic.yarnpkg.com/en/docs/install/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate into the project folder:

   ```bash
   cd weather-app
   ```

3. Install the project dependencies:

   If you are using **npm**:

   ```bash
   npm install
   ```

   If you are using **yarn**:

   ```bash
   yarn install
   ```

## Add .env File

Important: Before running the project, you need to create a `.env` file in the root `./` of the project directory. This file will store your OpenWeatherMap API key.

Add your OpenWeatherMap API key to the .env file:

```bash
NEXT_PUBLIC_OPENWEATHER_API_KEY=your-api-key-here
```

Make sure to replace your-api-key-here with your actual OpenWeatherMap API key.

## Running the Application

To run the application in development mode, execute the following command:

```bash
npm run dev
```

or

```bash
yarn dev
```

This will start the development server at `http://localhost:3000`. Open the URL in your browser to see the app in action.
