# Pokémon Explorer

Pokémon Explorer is a sleek and responsive web application that allows users to browse and filter Pokémon by type. It features lazy loading, type-based filtering, and a modern UI built with React, Next.js, and Tailwind CSS.

## Features

- **Filter by Type**: Select one or multiple Pokémon types to view matching Pokémon.
- **Lazy Loading**: Load data efficiently to optimize performance.
- **Responsive Design**: Ensures a seamless experience across all devices.
- **Dynamic UI**: Hover effects and animations for an engaging user experience.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Framework**: Next.js

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pokemon-explorer.git
   cd pokemon-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Deployed Application

Check out the live version of the application here: [Pokémon Explorer](https://pokemon-phi-jade-42.vercel.app/)

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Runs ESLint to check for code quality issues.

## Project Structure

```plaintext
pokemon-explorer/
├── app/
│   ├── components/
│   │   ├── PokedexGrid.tsx   # Displays the grid of Pokémon cards
│   │   ├── PokemonCard.tsx   # Displays individual Pokémon details
│   │   ├── PokemonTypeFilter.tsx   # Handles type-based filtering
│   │   ├── PokemonDetailsModal.tsx   # Displays Details of the pokemon
│   ├── hooks/
│   │   └── usePokemonData.ts   # Custom hook for fetching Pokémon data
├── public/                   # Static assets (images, etc.)
├── styles/                   # Global styles
├── pages/                    # Next.js pages
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Tailwind CSS Customization

The project uses Tailwind's utility-first approach for styling. To customize the design, update the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#50E3C2",
      },
    },
  },
  plugins: [],
};
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.


---

Enjoy exploring Pokémon with **Pokémon Explorer**! Feel free to contribute and make it even better. 😊
