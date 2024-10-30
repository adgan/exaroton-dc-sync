# Exaroton-Discord Integration Bot

This project connects the Minecraft hosting provider Exaroton with Discord via a bot. Users can log in with their Discord account on a frontend interface and store their Exaroton API key to manage their Exaroton servers through Discord.

## Project Structure

- **bot/**: Contains the Discord bot built with `discord.js` in TypeScript, allowing server control via Discord commands.
- **frontend/**: A Vite-React application built with TypeScript, where users can log in with Discord and enter their Exaroton API key. This component provides the user interface for managing the connection.
- **backend/**: A Node.js Express API server that handles database communication with MongoDB and manages data securely.

## Features

- **Discord Bot**: Provides commands to control Exaroton servers directly from Discord.
- **User Authentication**: Allows users to log in with their Discord account on the frontend.
- **Exaroton Integration**: Enables users to link and manage their Exaroton server with their Discord account.
- **MongoDB Database**: Stores user data, including Exaroton API keys, securely.

## Technologies

- **bot/**: `discord.js`, TypeScript
- **frontend/**: Vite, React, TypeScript, Discord OAuth2
- **backend/**: Node.js, Express, MongoDB, TypeScript

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/exaroton-discord-bot.git
    cd exaroton-discord-bot
    ```

2. **Install Dependencies**:
    - **Bot**:

      ```bash
      cd bot
      npm install
      ```

    - **Frontend**:

      ```bash
      cd ../frontend
      npm install
      ```

    - **Backend**:

      ```bash
      cd ../backend
      npm install
      ```

3. **Environment Variables**:
   Create a `.env` file in each folder (`bot`, `frontend`, `backend`) with the required credentials:

   - **bot/.env**:

     ```plaintext
     DISCORD_CLIENT_ID=your-discord-client-id
     DISCORD_TOKEN=your-discord-bot-token
     ```

   - **frontend/.env**:

     ```plaintext
     VITE_DISCORD_CLIENT_ID=your-discord-client-id
     VITE_DISCORD_REDIRECT_URI=your-redirect-uri
     
     ```

   - **backend/.env**:

     ```plaintext
     MONGODB_URI=your-mongodb-connection-string
     EXAROTON_API_KEY=your-exaroton-api-key
     ```

4. **Start the Services**:
    - **Bot**:

      ```bash
      cd bot
      npm start
      ```

    - **Frontend**:

      ```bash
      cd ../frontend
      npm run dev
      ```

    - **Backend**:

      ```bash
      cd ../backend
      npm start
      ```

## Contributing

Please open an issue to discuss changes or features before submitting a pull request.

## License

This project is licensed under the MIT License.
