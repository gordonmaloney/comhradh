import React, { useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from '@mui/icons-material/MicOff';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export class RecordPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blobURL: "",
      isBlocked: false,
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blobURL, isRecording: false });
      })
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
  }

  render() {
    return (
      <>
        <h3>Record your version:</h3>
        {this.state.isRecording ? (
          <button onClick={this.stop} disabled={!this.state.isRecording}>
            <MicOffIcon />
          </button>
        ) : (
          <button onClick={this.start} disabled={this.state.isRecording}>
            <MicIcon />
          </button>
        )}

        <br />
        <audio src={this.state.blobURL} controls="controls" />
      </>
    );
  }
}
