import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  isBeingEdited: Boolean,
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
});

// create PostModel class from schema
const NoteModel = mongoose.model('Post', NoteSchema);

export default NoteModel;
