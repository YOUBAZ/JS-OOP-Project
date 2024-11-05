import NotesAPI from "./NotesAPI.js";
NotesAPI.saveNotes({
  title: "New Note!",
  body: "I am a new Note.",
});
console.log(NotesAPI.getAllNotes());
