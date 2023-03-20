import _ from 'lodash';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './Piano.css';
import { Key } from './Key.js'
import {
  NOTES,
  KEY_TO_NOTE,
} from '../global/constants';
import NoteAnimation from './NoteAnimation';

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedNotes: [],
    };
  }

  playNote = (note) => {

    // const audio = new Audio(`audio/${note}.mp3`);
    // audio.play();
    // const noteEl = document.getElementById(note);
    // noteEl.classList.add('active');
    // setTimeout(() => {
    //   noteEl.classList.remove('active');
    // }, 300);
  
    // ReactDOM.render(<NoteAnimation />, document.getElementById('note-animation-container'));

    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.volume = 0.1;
      noteAudio.play();
      var updatePressedNotes = [...this.state.pressedNotes];
      updatePressedNotes.push(note);
      this.setState({
        pressedNotes: updatePressedNotes,
      });
    }
  }

  handleMouseDown = (event) => {
    if (event.repeat) {
      return;
    }
    if(event.srcElement.textContent.length <= 3) {
      var note = event.srcElement.textContent.toLowerCase()
      this.playNote(note);
    }
  }


  handleMouseUp = (event) => {
    if(event.srcElement.textContent.length <= 3) {
      var note = event.srcElement.textContent.toLowerCase();
      const index = this.state.pressedNotes.indexOf(note);
      if (index > -1) {
        this.setState(state => ({
          pressedNotes: state.pressedNotes.splice(index, 0)
        }));
      }
    }
  }

  handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    var key = event.key;
    var note = KEY_TO_NOTE[key];
    this.playNote(note);
  }

  handleKeyUp = (event) => {
    var note = KEY_TO_NOTE[event.key];
    const index = this.state.pressedNotes.indexOf(note);
    if (index > -1) {
      this.setState(state => ({
        pressedNotes: state.pressedNotes.splice(index, 0)
      }));
    }
  }

  

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    const keys = _.map(NOTES, (note, index) => {
      return (
        <Key
          key={index}
          note={note}
          pressedNotes={this.state.pressedNotes}
          isPressed={this.state.pressedNotes.includes(note)}
        />
      );
    });

    const audioFiles = _.map(NOTES, (note, index) => {
      return (
        <audio
          id={note}
          key={index}
          src={`../../notes/${note}.mp3`}
          //src = {'/Users/jackparkinson/Documents/React_Piano_App/piano/public/notes/f4.mp3'}
        />
      );
    });

    return (
      <div>
        <div className="piano">
          {keys}
        </div>
        <div>
          {audioFiles}
        </div>

      </div>
    );
  }
}

export { Piano };