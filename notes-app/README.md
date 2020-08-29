# Notes Application

## Node Modules Used
  1. yargs
  2. Chalk

## Command to install
  ```npm i yargs@version```
  ```npm i chalk@version```

## Notes Application have the following fuctionality
  1. Add Note with title and body.
  2. Remove the note.
  3. Search any note with the title.
  4. Get the list of all titles.

## Command to adding note into the notes.json
  ``` node app.js add --title="Shopping" --body="clothes, notebook, colors" ```

## Command for removing note from the notes.json
  ``` node app.js remove --title="Shopping" ```

## Command for seraching a note from the notes.json
  ``` node app.js read --title="Shopping" ```

## Command to get list of all notes.
  ```node app.js list -title="Shopping" ```

