# ⚛️🎶 React Tunes  
[![CircleCI](https://circleci.com/gh/codefulness/react-tunes/tree/master.svg?style=svg)](https://circleci.com/gh/codefulness/react-tunes/tree/master)  

[test live](https://react-tunes.herokuapp.com)

Demo application for a itunes-like application written in React and Nodejs.
## getting started (local development)
```
npm run build
npm start
```
## test live on heroku
[swagger documentation](https://react-tunes.herokuapp.com) 
[song api endpoint](https://react-tunes.herokuapp.com/api/song) 
[metadata api endpoint](https://react-tunes.herokuapp.com/api/metadata) 

## About the stack.
React tunes uses `hapi` framework integrated with `swagger`.
`Docker` is used to release to heroku.
`CircleCI` is used for automated builds, but currently just running webpack and eslint steps.

## Future improvements
- `monorepo`: When adding the UI, we could have multiple packages (api, ui), in this same repo using `lerna`, or `yarn` workspaces.
- `automation`: We could configure an automatic release when code is merged in master, by using either herouku pipelines, gitlab runners or other CI/CD tools.
- `git hooks`: We could add [`husky`](https://github.com/typicode/husky) to make sure we pass `eslint` and run unit tests before pushing.
- `unit-tests`: Add jest, and some unit/functional test, explore testing posibilities with swagger.  
- `documentation`: Include some documentation about how to setup the local development environment with/without Docker, and how to use nodemon to reload on save.  
