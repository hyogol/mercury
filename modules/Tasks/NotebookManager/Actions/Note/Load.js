const Database = require("../../Database/UserDatabase");
const fixedUser = "Anonymous";
let db = null;
module.exports = async noteId => {
  if (!db) {
    db = await Database();
  }
  if (!db) {
    console.error(`Error: unknown database, ${noteId}`);
    return `Error: unknown database, ${noteId}`;
  }
  try {
    db.read();
    const note = await db
      .get(`${fixedUser}.notes`)
      .filter((note) => !note.deletedAt)
      .find({ id: noteId })
      .value();
    return note;
  } catch (error) {
    console.error("ERROR ", error);
    return error;
  }
};
