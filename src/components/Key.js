import _ from 'lodash';
import React from 'react';

import './Key.css';
import { NOTE_TO_KEY } from '../global/constants';

class Key extends React.Component {
  noteIsFlat = (note) => {
    return note.length > 2;
  }

  keyIsPressed = (note, pressedNotes) => {
    return _.includes(pressedNotes, note);
  }

  render() {
    let keyClassName = "key";
    const noteIsFlat = this.noteIsFlat(this.props.note);
    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedNotes);
    if (noteIsFlat) {
      keyClassName += " flat";
    }
    if (keyIsPressed) {
      keyClassName += " pressed";
    }

    let key;

    key = (
      <div className={keyClassName}>
        <div className="key-text">{this.props.note.toUpperCase()}</div>
      </div>
    );

    // if (noteIsFlat) {
    //   key = <div className={keyClassName}></div>;
    // } else {
    //   key = (
    //     <div className={keyClassName}>
    //       <div className="key-text">{this.props.note.toUpperCase()}</div>
    //     </div>
    //   );
    // }
    return key;
  }
}

export { Key };