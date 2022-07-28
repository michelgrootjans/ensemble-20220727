# Ensemble programming instructions

## take over the role of driver
`mob start` takes over the current session. If there is no current session, it will create a temporary git branch for a new session.

if necessary, install new dependencies with `npm i`

`npm test` runst the tests once

`npm run test:watch` runs the tests continuously whenever a file changes

## rotating to a next driver
`mob next` commits everyting and pushes it to github

## ending an ensemble session
`mob done` squashes all changes to your local environment and deletes the temporary git branch.

`git commit -am "[description of your change]"`

`git push`