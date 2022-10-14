const notes = require("./notes");

const yargs = require("yargs");
const chalk = require("chalk");

// const validator = require('validator');

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv?.title, argv?.body)
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  },
});

yargs.command({
  command: "list",
  describe: "Listing all note",
  handler: () => {
    notes.getNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (args) => {
    notes.readNote(args.title);
  },
});


yargs.parse();
