# Exaroton-Discord Integration Bot

This project connects the Minecraft hosting provider Exaroton with Discord via a bot. Users can log in with their Discord account on a frontend interface and store their Exaroton API key to manage their Exaroton servers through Discord.

## Project Structure

- **bot/**: Contains the Discord bot built with `discord.js` in TypeScript, allowing server control via Discord commands.
- **frontend/**: A Vite-React application built with TypeScript, where users can log in with Discord and enter their Exaroton API key. This component provides the user interface for managing the connection.
- **functions/**: A Firebase Functions setup that handles backend logic and database communication.

## Features

- **Discord Bot**: Provides commands to control Exaroton servers directly from Discord.
- **User Authentication**: Allows users to log in with their Discord account on the frontend.
- **Exaroton Integration**: Enables users to link and manage their Exaroton server with their Discord account.
- **Firebase Functions**: Handles backend logic and database communication securely.

## Stack

- **bot/**: `discord.js`, TypeScript
- **frontend/**: Vite, React, TypeScript, Discord OAuth2
- **functions/**: Firebase Functions, TypeScript

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

    - **Functions**:

      ```bash
      cd ../functions
      npm install
      ```

3. **Environment Variables**:
   Create a `.env` file in each folder (`bot`, `frontend`, `functions`) with the required credentials:

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

   - **functions/.env**:

     ```plaintext
     FIREBASE_PROJECT_ID=your-firebase-project-id
     FIREBASE_PRIVATE_KEY=your-firebase-private-key
     FIREBASE_CLIENT_EMAIL=your-firebase-client-email
     ```

4. **Start the Services**:
    - **Bot**:

      ```bash
      cd bot
      npm run dev
      ```

    - **Frontend**:

      ```bash
      cd ../frontend
      npm run dev
      ```

    - **Functions**:

      ```bash
      cd ../functions
      npm run dev
      ```

## Contributing

Please open an issue to discuss changes or features before submitting a pull request.

## License

This project is licensed under the MIT License.

## Google IDX

This project exists because I wanted to use/test the [Project IDX](<https://idx.google.com>). That is why there is a .idx folder.
