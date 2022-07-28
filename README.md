# Ensemble programming instructions
## requirements for this project
You need to have the following installed:
- git (obviously)
- [node](https://nodejs.org/en/download/)
- [mob.sh](https://mob.sh/)

## Before you start
- clone this repository (obviously)
- `npm i` to install the necessary dependencies

## Ensemble routine
### take over the role of driver
`mob start 5` takes over the current session and starts the timer of 5 minutes. If there is no current session, it will create a new session with a temporary git branch.

if necessary, install new dependencies with `npm i`

`npm test` runst the tests once

`npm run test:watch` runs the tests continuously whenever a file changes

### rotating to a next driver
When the timer goes off: `mob next` commits everything and pushes it to github

### ending an ensemble session
`mob done` squashes all changes to your local environment and deletes the temporary git branch.

`git commit -am "[description of your change]"`

`git push`
