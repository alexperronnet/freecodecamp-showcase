# Argent Bank - Frontend

![p13-preview](https://github.com/alexperronnet/openclassrooms-p13-argent-bank/assets/59840413/3702a491-e0ad-44d4-af95-32695f1d4817)

## Table of contents

- [Argent Bank - Frontend](#argent-bank---frontend)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Usefull links](#usefull-links)
    - [Current state](#current-state)
  - [Prerequisites](#prerequisites)
  - [Stack](#stack)
    - [Primary stack](#primary-stack)
    - [Code quality](#code-quality)
  - [Local setup](#local-setup)
    - [Frontend](#frontend)
      - [Available scripts](#available-scripts)
    - [Backend](#backend)
  - [License](#license)

## Overview

For this project, we have to build a banking application called "Argent Bank". The goal is to use an [API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) to create a frontend application with React and Redux.

### Usefull links

- [Live demo](https://argent-bank.alexperronnet.dev/)
- [Backend repository](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

### Current state

This project is currently in **phase 1** of 2. This means that the following features are available:

- User in database can login and persist his session with a JWT token
- Unauthenticated user can register
- User can logout
- User can see and edit his profile

> For the phase 2, we have to deal with the "transactions" feature. Please refer to the [Swagger documentation](./doc/swagger.yaml) for a proposition of API endpoints to implement.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.16.0)

> If you are using a node version manager like [FNM](https://github.com/Schniz/fnm) or [NVM](https://github.com/nvm-sh/nvm), you can run `fnm use` or `nvm use` to automatically switch to the right node version.

## Stack

> Please refer to the [package.json](./package.json) file for more informations about the dependencies with their version.

### Primary stack

| Technology/Library                                           | Description                  |
| ------------------------------------------------------------ | ---------------------------- |
| [React](https://reactjs.org/)                                | Frontend library             |
| [Vite](https://vitejs.dev/)                                  | Frontend build tool          |
| [(S)CSS Modules](https://github.com/css-modules/css-modules) | CSS modules with SCSS syntax |
| [TypeScript](https://www.typescriptlang.org/)                | Static type checker          |
| [React Router DOM](https://reactrouter.com/en/main)          | Routing library              |
| [React Redux](https://react-redux.js.org/)                   | State management library     |
| [Axios](https://axios-http.com/)                             | HTTP client                  |

### Code quality

| Tool                               | Description       |
| ---------------------------------- | ----------------- |
| [ESLint](https://eslint.org/)      | JavaScript linter |
| [Prettier](https://prettier.io/)   | Code formatter    |
| [Stylelint](https://stylelint.io/) | CSS linter        |

## Local setup

### Frontend

> For this project, we use [PNPM](https://pnpm.io/) as package manager but you can also use [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) instead.

1. Follow the [backend installation](#backend) instructions

2. Clone the repository

   ```bash
   git clone https://github.com/alexperronnet/openclassrooms-p13-argent-bank
   ```

3. Navigate to the project directory

   ```bash
   cd openclassrooms-p13-argent-bank
   ```

4. Install the dependencies

   ```bash
   pnpm install
   ```

5. Start the development server

   ```bash
    pnpm run dev
   ```

6. Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/)

#### Available scripts

| Script                   | Description                                  |
| ------------------------ | -------------------------------------------- |
| `pnpm run dev`           | Start the development server                 |
| `pnpm run build`         | Build the project for production             |
| `pnpm run preview`       | Preview the production build                 |
| `pnpm run deploy`        | Deploy the production build to Deploy branch |
| `pnpm run lint`          | Run the linter                               |
| `pnpm run lint:fix`      | Run the linter and fix the errors            |
| `pnpm run format`        | Run the formatter                            |
| `pnpm run format:fix`    | Run the formatter and fix the errors         |
| `pnpm run stylelint`     | Run the style linter                         |
| `pnpm run stylelint:fix` | Run the style linter and fix the errors      |

### Backend

To get more informations about the backend installation, please refer to the [backend repository](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API).

> If you are a Mac user, you may need to following this [issue](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/issues/19) to install the backend.

If everything is working, the backend should be available at [http://localhost:3001/](http://localhost:3001/) and the Swagger documentation at [http://localhost:3001/api-docs/](http://localhost:3001/api-docs/).

## License

This is an OpenClassrooms project. The code is freely reusable, but assets are not because they are not mine. If you are also a student of OpenClassrooms, you can use my work as inspiration but I strongly recommend to not copy/paste any part of it.
