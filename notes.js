const fs = require("fs");
const chalk = require('chalk');

const getNotes = () => {
  const notes = loadNotes();
  console.table(notes)
  if(notes.length > 0) {
    console.log(chalk.inverse("Showing notes list..."));
    notes?.forEach(note => {
      console.log(note);
    });
  } else {
    console.log('Sorry no notes found!');
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.find((v) => v.title === title);
  if(notesToKeep) {
    console.log(chalk.green.inverse("Match found! Showing note..."));
    console.log(notesToKeep);
  } else {
    console.log(chalk.red.inverse('Sorry no note found where title =', title));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((v) => v.title === title);
  if (duplicateNotes?.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('Note added!'));
  } else {
    console.log(chalk.red.inverse('Duplicate note.'));

  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((v) => v.title !== title);
  if (notes.length > notesToKeep?.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse('Note deleted!'));
  } else {
    console.log(chalk.red.inverse('Sorry, note title not found!'));
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  try {
    fs.writeFileSync("notes.json", dataJson);
  } catch {
    fs.writeFile('./notes.json', json, (err) => {
      if (!err) {
          console.log('done');
      }
  });
  }
};

module.exports = { getNotes: getNotes, readNote:readNote, addNote: addNote, removeNote:removeNote };
