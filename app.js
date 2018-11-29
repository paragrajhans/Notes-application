console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');


// console.log(_.isString('Amruta'));

// console.log('Result: ', notes.add(9,2));
// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
// console.log(user);
// fs.appendFileSync('greetings.txt',`Hello ${user.username}: You are ${notes.age}`);

const argv = yargs.argv;    

var command = process.argv[2];

console.log(command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add') {
    // console.log('Adding a new note');
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    // console.log('Listing all notes');
    notes.getAll();
} else if ( command === 'remove') {
    notes.removeNote(argv.title);
    // console.log('Removing a note');
} else if ( command === 'read') {
    notes.getNote(argv.title);
    // console.log('Reading a note');
}

else {
    console.log('Command not recognized');
}

