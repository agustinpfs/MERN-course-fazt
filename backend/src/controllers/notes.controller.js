const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,    // = title: title
        content,
        date,
        author
    });
    await newNote.save();
    res.json('New Note added');
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndRemove(req.params.id)
    res.json('Note Deleted');
}

notesCtrl.updateNotes = async (req, res) => {
    const { title, content, duration, date, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        author
    });
    res.json('Note Updated');
}

module.exports = notesCtrl;