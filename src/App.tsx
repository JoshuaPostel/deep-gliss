import * as React from "react";
import * as ReactDOM from "react-dom";
import deepGlissCapture from "./DeepGlissGreyOut.png";
import "./App.css";
import * as SoundCloud from "./SoundCloud";
import * as Button from "./Button"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Title">DeepGliss</h1>
        <p className="Description">
          A free and open source VST plugin performing continuous pitch bend
          between chords
        </p>
        <img className="Screen-shot" src={deepGlissCapture} alt="Screen Shot"/>
        <h1 className="Section-header">Download</h1>
	<div className="Center-text">
	  <text>This is an <b>alpha</b> release - there are <a className="Link" href="https://github.com/JoshuaPostel/DeepGliss/issues">known issues</a> and you may encounter bugs</text>
	</div>
        <div className="Download-buttons-row">
          <Button.Linux />
          <Button.Windows />
          <Button.Mac />
        </div>
        <h1 className="Section-header">Audio Samples</h1>

        <div className="SoundCloud-player-row">
	  <SoundCloud.EmbeddedPlayer trackNumber={1281541732} hexColor="000000" />
	  <SoundCloud.EmbeddedPlayer trackNumber={1267237897} hexColor="000000" />
        </div>
        <div className="SoundCloud-player-row">
	  <SoundCloud.EmbeddedPlayer trackNumber={1288365238} hexColor="000000" />
	  <SoundCloud.EmbeddedPlayer trackNumber={1267237321} hexColor="000000" />
        </div>
        <h1 className="Section-header">Setup</h1>
	<div className="Center-text">
	  Requires an instrument with <a className="Link" href="https://en.wikipedia.org/wiki/MIDI#MIDI_Polyphonic_Expression">MIDI Polyphonic Expression</a> support such as <a className="Link" href="https://vital.audio/">Vital</a>, <a className="Link" href="https://www.ableton.com/en/packs/operator/">Operator</a>, or <a className="Link" href="https://www.ableton.com/en/packs/string-quartet/">Spitfire String Quartet</a>
	</div>
	<ol className="Ul">
	  <li>Move the DeepGliss download to your VST2 plugin directory</li>
	  <li>In your DAW, route MIDI input into DeepGliss and the MIDI output of DeepGliss into your instrument</li>
	  <li>Set DeepGliss's pitchbend range (under settings) to match the instrument's pitchbend range</li>
	</ol>
	<div className="Center-iframe">
	  <iframe width="40%" src="https://www.youtube.com/embed/JLAV5rcD0sQ" title="Ableton Setup" frameBorder="0" allowFullScreen />
	  <iframe width="6%" frameBorder="0" />
	  <iframe width="40%" src="https://www.youtube.com/embed/qKgouPCmgdw" title="Bitwig Setup" frameBorder="0" allowFullScreen />
	</div>
        <h1 className="Section-header">Feedback</h1>
	<div className="Center-text">
	  Bug reports, feature requests, presets, sounds, and general suggestions are greatly appreciated via <a className="Link" href="https://github.com/JoshuaPostel/DeepGliss/issues">GitHub</a>
	</div>
        <h1 className="Section-header">About</h1>
	<div className="Center-text">
	  The name DeepGliss comes from <a className="Link" href="https://en.wikipedia.org/wiki/Deep_Note">Deep Note</a> + <a className="Link" href="https://en.wikipedia.org/wiki/Glissando">Glissando</a>
        </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
