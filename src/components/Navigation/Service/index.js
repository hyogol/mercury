import React, { useEffect } from "react";
import {
  Alignment,
  Button,
  Navbar,
  Popover,
  Position
} from "@blueprintjs/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotesMenu from "./Notes";
import NoteActions from "../../../store/Note/actions";
import NoteCreateDialog from "../../Platform/Management/Dialog/NoteCreateDialog";
import NoteExportDialog from "../../Platform/Management/Dialog/NoteExportDialog";
import NoteImportDialog from "../../Platform/Management/Dialog/NoteImportDialog";
import NoteRemoveDialog from "../../Platform/Management/Dialog/NoteRemoveDialog";
import NoteConfigurationDialog from "../../Platform/Management/Dialog/NoteConfigurationDialog";
import SuggestionSaveNoteButton from "./Partials/SuggestionForSaveNoteButton";
import ExportNoteButton from "./Partials/ExportNoteButton";
import RemoveNoteButton from "./Partials/RemoveNoteButton"
import ConfigurationNoteButton from "./Partials/ConfigrationNoteButton";

import "./service.scss";

export default props => {
  const currentNote = useSelector(state => state.note.current.note);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(NoteActions.listOfNote());
  }, []);

  return (
    <>
      <Navbar fixedToTop className="mercury-service-navbar">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Mercury</Navbar.Heading>
          <Navbar.Divider />
          <NavLink to="/" exact activeClassName="active">
            <Button className="bp3-minimal" icon="home" text="Home" />
          </NavLink>
          <Popover content={<NotesMenu />} position={Position.BOTTOM} popoverClassName={`mercury-service-nav-note-menus-container`}>
            <Button className="bp3-minimal" icon="cube" text="Notes" />
          </Popover>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          {currentNote && currentNote.id ? (
            <>
              <ExportNoteButton />
              <SuggestionSaveNoteButton />
              <ConfigurationNoteButton />
              <Navbar.Divider />
              <RemoveNoteButton />
            </>
          ) : null}
        </Navbar.Group>
      </Navbar>
      <NoteCreateDialog />
      <NoteExportDialog />
      <NoteImportDialog />
      <NoteRemoveDialog />
      <NoteConfigurationDialog />
    </>
  );
};
