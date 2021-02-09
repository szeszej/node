const yargs = require('yargs')
const notes = require('./notes.js')

//Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note description',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
})

//Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'The title of note to be removed',
      type: 'string',
      demandOption: true,
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
})

//List command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    notes.listNotes()
  },
})

//Read command
yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Title of the note to read',
      type: 'string',
      demandOption: true,
    },
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
})

yargs.parse()
