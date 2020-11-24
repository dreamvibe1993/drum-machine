import './App.css';
import { Component } from 'react';
import Akai from './Akai/Akai'
import Pad from './Padsiface/Pad'
import Padsplaceholder from './Padsiface/Padsplaceholder'

const mainstyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: "#000000"
}

class App extends Component {
  state = {
    pads: [
      {id: 'Ride-1', keycode: '5', url: 'samples/Ride-1.mp3'},
      {id: 'Ride-2', keycode: '6', url: 'samples/Ride-2.mp3'},
      {id: 'Crash-1', keycode: '7', url: 'samples/Crash-1.mp3'},
      {id: 'Crash-2', keycode: '8', url: 'samples/Crash-2.mp3'},
      {id: 'Tom-1', keycode: 'r', url: 'samples/Tom-1.mp3'},
      {id: 'Tom-2', keycode: 't', url: 'samples/Tom-2.mp3'},
      {id: 'Tom-3', keycode: 'y', url: 'samples/Tom-3.mp3'},
      {id: 'Tom-4', keycode: 'u', url: 'samples/Tom-4.mp3'},
      {id: 'Hihat-Foot', keycode: 'f', url: 'samples/Hat-1.mp3'},
      {id: 'Hihat-Closed', keycode: 'g', url: 'samples/Hat-2.mp3'},
      {id: 'Hihat-Loose', keycode: 'h', url: 'samples/Hat-3.mp3'},
      {id: 'Hihat-Open', keycode: 'j', url: 'samples/Hat-4.mp3'},
      {id: 'Kick-1', keycode: 'c', url: 'samples/Kick-1.mp3'},
      {id: 'Kick-2', keycode: 'v', url: 'samples/Kick-2.mp3'},
      {id: 'Snare-1', keycode: 'b', url: 'samples/Snare-1.mp3'},
      {id: 'Snare-2', keycode: 'n', url: 'samples/Snare-2.mp3'}
    ]
  }
  componentDidMount() {
    document.addEventListener('keydown', this.pressHandler)
  }
  lightTrigger = (pad) => {
    pad.style.opacity = 0.2;
    pad.style.background = 'black';
    setTimeout(() => {
      pad.style.opacity = 1;
      pad.style.background = 'none';
    }, 100)
  }
  pressHandler = (event) => {
    let bullseye = this.state.pads.findIndex(p => {
      return event.key == p.keycode;
    })
    if (bullseye >= 0) {
      const sound = document.querySelector('#' + this.state.pads[bullseye].id);
      let pad = sound.parentNode;
      this.lightTrigger(pad);
      sound.currentTime = 0;
      sound.play();
    } else {
      console.log('missed');
    }
  }
  render() {
    return (
      <div style={mainstyle}>
        <Akai>
          <Padsplaceholder>
            {
              this.state.pads.map((i, index) => {
                return <Pad
                  key={index}
                  keydown={this.pressHandler}
                  >
                    <audio id={i.id} src={i.url}></audio>
                </Pad>
              })
            }
          </Padsplaceholder>
        </Akai>
      </div>
    )
  }
}



export default App;
