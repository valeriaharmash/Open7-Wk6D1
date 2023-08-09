# Code Demo Instructions

## Overview

Slowly building a REST API this week, starting with a static web server

## GitHub

Create a new Repo with a readme.md file, this auto creates a main branch for you.

## Local Terminal - bash.sh has syntax instructions

1. Navigate to your repo folder
2. Clone repo and navigate into it
3. Create dev branch and push upstream
4. Create feature branch
5. Create public and src directories
6. Create `.gitignore`, `server.js`, `public/index.html`, `public/home.html` and `src/app.js`
7. Run `npm init -y` and `npm install express`
8. Open folder in VS Code

## VS Code `.gitignore` - `.gitignore` has Syntax Instructions

9. Add `/node_modules`

## VS Code `index.html` - `index.html` has Syntax Instructions

10. Create html boilerplate and add a h1 to the body
11. Add an anchor tag that points to `home.html`

## VS Code `home.html` - `home.html` has Syntax Instructions

12. Create boilerplate and add h1 to body
13. Add an anchor tag that points to `index.html`

## VS Code `app.js` - `app.js` has Syntax Instructions

14. Import express and create app variable with express method
15. Use express.static method with app, passing the public directory into `express.static`
16. Export app variable

## VS Code `server.js` - `server.js` has Syntax Instructions

17. Import app variable and declare a port variable
18. Use `app.listen` method, passing a port and callback function, then run the app and display in browser

## VS Code `app.js` - `app.js` has Syntax Instructions

19. Add get request with anonymous controller using the res.send method to return data
20. Declare a controller function that uses the res.json method to return data. Add it to another get request
21. Run the app and demo accessing the GET requests

## VS Code Terminal - `bash.sh` has Syntax Instructions

22. Git workflow

## GitHub

23. Merge feature branch with dev branch
