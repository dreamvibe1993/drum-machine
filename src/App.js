import './App.css';
import { Component } from 'react';
import Akai from './Akai/Akai'
import Pad from './Padsiface/Pad'
import Padsplaceholder from './Padsiface/Padsplaceholder'
import Screen from './Akai/Screen'
import VolumeButtons from './Akai/VolumeButtons/VolumeButtons'


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
    screen: 'none',
    libname: 'BoomBapRaw',
    mainVolume: 1.0,
    smplVolume: 1.0,
    display: {display: 'none'}
  }
  componentDidMount() {
    document.addEventListener('keydown', this.pressHandler)
    document.querySelector('#scrVolWrapper').style.display = 'none';
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
        screen: this.state.pads[value].id,
        smplVolume: sound.volume.toFixed(1)
      })
      this.lightTrigger(pad);
      sound.currentTime = 0;
      sound.play();
  }
  pressHandler = (event) => {
    if (event.type == 'keydown') {
      if (event.code == 'NumpadAdd' || event.code == 'NumpadSubtract' || event.code == 'NumpadMultiply' || event.code == 'Numpad9') {
        this.volumeHandler(event);
      }
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
screenSwitcher = (value) => {
  let vol_part = document.querySelector('#scrVolWrapper');
  let samp_vol = document.querySelector('#scrSvolPar');
  let scr_curr_samp = document.querySelector('#scrSampPar');
  let scr_lib = document.querySelector('#scrLibrPar');
  let main_vol = document.querySelector('#scrMvolPar');
  if (value == 'main') {
    main_vol.style.display = 'block';
    scr_lib.style.display = 'none';
    samp_vol.style.display = 'none';
    scr_curr_samp.style.display = 'none';
    vol_part.style.display = 'block';
    setTimeout(() => {
      main_vol.style.display = 'none';
      scr_lib.style.display = 'block';
      samp_vol.style.display = 'none';
      scr_curr_samp.style.display = 'block';
      vol_part.style.display = 'none';
    }, 1000)
  }
  if (value == 'samp') {
    main_vol.style.display = 'none';
    scr_lib.style.display = 'none';
    samp_vol.style.display = 'block';
    scr_curr_samp.style.display = 'block';
    vol_part.style.display = 'block';
    setTimeout(() => {
      main_vol.style.display = 'none';
      scr_lib.style.display = 'block';
      samp_vol.style.display = 'none';
      scr_curr_samp.style.display = 'block';
      vol_part.style.display = 'none';
    }, 1000)
  }
  if (this.state.screen == 'none') {
    this.setState({screen: 'push_a_pad_to_adjust'});
    setTimeout(() => {this.setState({screen: 'none'})}, 1000);
  }
}
sampleVolUp = (rabbit) => {
  if (rabbit != null) {
  rabbit.volume = this.state.smplVolume;
  rabbit.volume > 0.9 ? rabbit.volume = 1 
  : rabbit.volume += 0.1
  this.setState({
    smplVolume: rabbit.volume.toFixed(1)
  })
  } else {
    return;
  }
}

sampleVolDn = (rabbit) => {
  if (rabbit != null) {
  rabbit.volume = this.state.smplVolume;
  rabbit.volume < 0.1 ? rabbit.volume = 0 
  : rabbit.volume -= 0.1
  this.setState({
    smplVolume: rabbit.volume.toFixed(1)
  })
  } else {
    return;
  }
}
volumeHandler = (event) => {
  let rabbit = this.state.screen != '' ? document.querySelector(`#${this.state.screen}`) : null;
  let id = event.target.id;
  let keyid;
  if (event.code == 'NumpadAdd') {
    keyid = 'mainvup'
  } else if (event.code == 'NumpadSubtract') {
    keyid = 'mainvdn'
  } else if (event.code == 'NumpadMultiply') {
    keyid = 'smplvup'
  } else if (event.code == 'Numpad9') {
    keyid = 'smplvdn'
  }
  let mainAudio = document.querySelectorAll('audio');
  if (event.target.className != 'VolumeBtnsContainer') {
    switch(id || keyid) {
      case "mainvup":
      this.screenSwitcher('main');
        mainAudio.forEach((element) => {element.volume > 0.9 ? element.volume = 1 : element.volume += 0.1})
        if (rabbit == null) {
          this.setState({
            smplVolume: mainAudio[0].volume.toFixed(1)
          })
        } else {
          this.sampleVolUp(rabbit);
        }
        this.setState({
          mainVolume: mainAudio[0].volume.toFixed(1),
        })
        break;
      case "mainvdn":
        this.screenSwitcher('main');
        mainAudio.forEach((element) => {element.volume < 0.1 ? element.volume = 0 : element.volume -= 0.1})
        if (rabbit == null) {
          this.setState({
            smplVolume: mainAudio[0].volume.toFixed(1)
          })
        } else {
          this.sampleVolDn(rabbit);
        }
        this.setState({
          mainVolume: mainAudio[0].volume.toFixed(1),
        })
        break;
      case 'smplvup':
        this.screenSwitcher('samp');
        this.sampleVolUp(rabbit);
        break;
      case 'smplvdn':
        this.screenSwitcher('samp');
        this.sampleVolDn(rabbit);
        break;
      default:
        break;
    }
  } else {
    return;
  }
}
  render() {
    return (
      <div className="App">
        <div className="Containter">
          <div className="TableLeft">
            <img className="KeyBindings" src="key-bindings.png"></img>
            <img className="VolumeBindings" src="vm-bindings.png"></img>
          </div>
          <div className="TableCenter">
            <Akai>
              <div style={{display: 'flex'}}>
              <VolumeButtons clicked={this.volumeHandler}/>
              <Screen screenSample={this.state.screen} screenLib={this.state.libname} 
              mainVol={this.state.mainVolume} sampVol={this.state.smplVolume}/>
              </div>
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
          <div className="TableRight">
            <img onClick={this.switchTheLibrary} className="Disquette BB" src="disquette-bb-dset.png"></img>
            <img onClick={this.switchTheLibrary} className="Disquette BH" src="disquette-bh-dset.png"></img>
          </div>
        </div>  
      </div>
    )
  }
}



export default App;
