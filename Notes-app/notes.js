const fs = require('fs')
const chalk = require('chalk')
const { loadavg } = require('os')

const getNotes = () => {
    return 'Your notes...'
}


//add notes module
const addNote = (title, body) => {
    const notes = loadNotes()
    const dupeNotes = notes.filter((note) => note.title === title)
    const dupeNote = notes.find((note) => note.title === title)

    //trying to debugg
    // console.log(dupeNote)
    // console.log(title)
    // debugger

    if (!dupeNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New note added'))
    } else {
        console.log(chalk.red.bold.inverse('Note title taken'))
    }
}


//remove notes module
const removeNote = (title) => {
    const notes = loadNotes()
    const availableNotes = notes.filter((note) => note.title !== title)
    if (notes.length > availableNotes.length) {
        console.log(chalk.green.bold.inverse('Note removed'))
        //     notes.remove({
        //         title: title
        //     })
        saveNotes(availableNotes)
        //     console.log('Note removed')
    } else {
        console.log(chalk.red.bold.inverse('No Note found'))
    }


}

//list all the notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}


//read command
const readNote = (title) => {
    const notes = loadNotes()
    console.log(chalk.blue.bold.inverse('Searched note'))
    const note = notes.find((note) => note.title === title)

    if (note) {

        console.log(chalk.bold.white.inverse(note.title))
        console.log(note.body)

    } else {
        console.log(chalk.red.inverse.bold('Not found'))
    }


}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function () {
    try {
        const databuffer = fs.readFileSync('Notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }


}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}