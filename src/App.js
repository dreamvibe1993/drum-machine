import './App.css';
import { Component } from 'react';
import Akai from './Akai/Akai'
import Pad from './Padsiface/Pad'
import Padsplaceholder from './Padsiface/Padsplaceholder'
import Screen from './Akai/Screen'


class App extends Component {
  state = {
    pads: [
      {id: 'Ride-1', keycode: '5', url: 'samples/boombap/Ride-1.mp3'},
      {id: 'Ride-2', keycode: '6', url: 'samples/boombap/Ride-2.mp3'},
      {id: 'Crash-1', keycode: '7', url: 'samples/boombap/Crash-1.mp3'},
      {id: 'Crash-2', keycode: '8', url: 'samples/boombap/Crash-2.mp3'},
      {id: 'Tom-1', keycode: 'r', url: 'samples/boombap/Tom-1.mp3'},
      {id: 'Tom-2', keycode: 't', url: 'samples/boombap/Tom-2.mp3'},
      {id: 'Tom-3', keycode: 'y', url: 'samples/boombap/Tom-3.mp3'},
      {id: 'Tom-4', keycode: 'u', url: 'samples/boombap/Tom-4.mp3'},
      {id: 'Hihat-Foot', keycode: 'f', url: 'samples/boombap/Hat-1.mp3'},
      {id: 'Hihat-Closed', keycode: 'g', url: 'samples/boombap/Hat-2.mp3'},
      {id: 'Hihat-Loose', keycode: 'h', url: 'samples/boombap/Hat-3.mp3'},
      {id: 'Hihat-Open', keycode: 'j', url: 'samples/boombap/Hat-4.mp3'},
      {id: 'Kick-1', keycode: 'c', url: 'samples/boombap/Kick-1.mp3'},
      {id: 'Kick-2', keycode: 'v', url: 'samples/boombap/Kick-2.mp3'},
      {id: 'Snare-1', keycode: 'b', url: 'samples/boombap/Snare-1.mp3'},
      {id: 'Snare-2', keycode: 'n', url: 'samples/boombap/Snare-2.mp3'}
    ],
    screen: '',
    libname: 'BoomBapRaw'
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
  playThesound = (value) => {
      const sound = document.querySelector('#' + this.state.pads[value].id);
      let pad = sound.parentNode;
      this.setState({
        screen: this.state.pads[value].id
      })
      this.lightTrigger(pad);
      sound.currentTime = 0;
      sound.play();
  }
  pressHandler = (event) => {
    if (event.type == 'keydown') {
      let bullseye = this.state.pads.findIndex(p => {
        return event.key == p.keycode;
      })
      if (bullseye >= 0) {
        this.playThesound(bullseye);
      } else {
        return
      }
    }
    if (event.type == 'click') {
      let bullseye = this.state.pads.findIndex(p => {
        return event.target.firstChild.id == p.id;
      })
      if (bullseye) {
        this.playThesound(bullseye);
      } else {
        return
      }
    }
  }
  refreshTheLinks = (libname) => {
    let mutatedpads = [...this.state.pads];
    let taintedWord = libname == 'BoomBapRaw' ? 'bhouse' : 'boombap';
    let newLibName = libname == 'BoomBapRaw' ? 'BasslineHouse' : 'BoomBapRaw';
    for (let i of mutatedpads) {
      let c = i.url.indexOf('/');
      let d = i.url.indexOf('/', c+1);
      let wl = d - c;
      let f = i.url.slice(0, c)
      let s = i.url.slice(c+1 + wl)
      i.url = `${f}/${taintedWord}/${s}`
    }
    console.log(mutatedpads)
    this.setState({
      pads: mutatedpads,
      libname: newLibName
    })
  }
  switchTheLibrary = (event) => {
    if (event.target.className.includes('BB')) {
      if (this.state.libname == 'BoomBapRaw') {
        return;
      } else {
        this.refreshTheLinks('BasslineHouse');
      }
    }
    if (event.target.className.includes('BH')) {
      if (this.state.libname == 'BasslineHouse') {
        return;
      } else {
        this.refreshTheLinks('BoomBapRaw');
      }
    }
}
  render() {
    return (
      <div className="App">
        <img className="KeyBindings" src="key-bindings.png"></img>
        <img onClick={this.switchTheLibrary} className="Disquette BB" src="disquette-bb-dset.png"></img>
        <img onClick={this.switchTheLibrary} className="Disquette BH" src="disquette-bh-dset.png"></img>
        <Akai>
          <Screen>
            <p className="Screen Sample">current sample: <br/>{this.state.screen}</p>
            <p className="Screen Library">current library: {this.state.libname}</p>
          </Screen>
          <Padsplaceholder>
            {
              this.state.pads.map((i, index) => {
                return <Pad
                  key={index}
                  keydown={this.pressHandler}
                  click={this.pressHandler}
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
