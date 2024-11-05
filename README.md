# Live Football World Cup Scoreboard

## Overview

The Live Football World Cup Scoreboard is a simple library designed to manage and display ongoing football matches and their scores. It let users start and finish new matches, update scores and retrieve a summary of all ongoing matches. Matches are ordered by their total score.

## Features

- **Start match:** Initialise a new match with an initial score of 0-0.
- **Update score:** Update the score of an existing match with absolute values for the home and away teams.
- **Finish match:** Remove a match from the scoreboard once it has finished.
- **Get summary:** Retrieve a summary of matches in progress with draws broken by the most recently started match. Ordered by total score.

## Stack

- **Node.js:** Runtime environment.
- **Jest:** Testing framework.
- **pnpm:** Package manager.

## Start

### Prerequisites

- **Node.js:** Ensure you have Node.js installed on your machine.
- **pnpm:** Install pnpm globally if you haven't already:

```bash
npm install -g pnpm
```

- Clone the repo:

```bash
git clone https://github.com/cdemetriad/sportradar.git
cd sportradar
```

- Install deps:
  `pnpm install`

### Running the script

Since this is a library, there is no standalone application to run. You can use the library in your own projects by importing the Scoreboard class. I have used `nodemon` for development whilt working on this script, you can run that with `pnpm dev`.

### Testing

Run the tests using Jest:
`pnpm test`

## How to use the Scoreboard class

```bash
const Scoreboard = require('./src/scoreboard');
const scoreboard = new Scoreboard();
scoreboard.startMatch('Mexico', 'Canada');
scoreboard.updateScore('Mexico', 'Canada', 0, 5);
console.log(scoreboard.getSummary());
```
