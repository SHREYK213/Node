const chalk = require('chalk')
const { describe, argv, demand, demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')


//customize

yargs.version('1.0.0')

// add, remove, read, list

//Create add
yargs.command({
    command: 'add',
    describe: 'Add A new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.addNote(argv.title, argv.body)
    }

})

//Create remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.removeNote(argv.title)
    }
})

//Create list
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        notes.listNotes()
    }
})

//Create read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.readNote(argv.title)
    }
})



yargs.parse()
// console.log(yargs.argv)