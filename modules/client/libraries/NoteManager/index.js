const UUID = require("uuid/v4");
const NoteManagerTask = require("../../../Tasks/NotebookManager");
const NoteManager = NoteManagerTask.task;

module.exports = () => {
  return {
    save: (data, _jobID = UUID()) => {
      const type = "save.note";
      return NoteManager.build(_jobID, {
        ...data,
        type
      }).send();
    },
    load: (data, _jobID = UUID()) => {
      const type = "load.note";
      return NoteManager.build(_jobID, {
        ...data,
        type
      }).send();
    },
    list: (_jobID = UUID()) => {
      const type = "list.note";
      return NoteManager.build(_jobID, {
        type
      }).send();
    }
  };
};