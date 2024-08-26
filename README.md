# Technical test for PandaGo

Frontend application built with:

The Progressive JavaScript Framework [Vue.js](https://vuejs.org/) using version 3 and [PrimeVue](https://primevue.org/).

Main dependencies:

- [PrimeVue](https://primevue.org/)
- [PrimeFlex](https://primeflex.org/)

# Installation

This application requires of <a href="https://nodejs.org/" target="_blank">NodeJS</a> version `>=13.11.0` to run and <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a> versión `>=6.13.7`.

# Download repository

Clone the repo to the desired folder and install dependencies with the following commands:

```sh
mkdir <project-folder-name>
git clone <url> <project-folder-name>
cd <project-folder-name>
npm install
```

# After dependencies installation

# 1st: Create a .env file

Each `developer` must create a file in the root of their local project, called `.env` with the following variables and values:


```sh
VUE_APP_API_URL=#{ API FUTDB HOST }#
VUE_APP_API_USERS_URL=#{ API USERS HOST }#
```

This project is for resolve a little exercise and is not necesary hide the URL API.

```sh
VUE_APP_API_URL=https://futdb.app/api
VUE_APP_API_USERS_URL=https://randomuser.me/api/
```

To use the FutDB API you need an authentication key that you can obtain by creating an account or by using this

 ## Key authentication for FutDB
```
API-Key: ad036a7f-c213-4f46-b4fe-4ce7870c07a8
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
