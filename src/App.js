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
      {id: 1, name: 'Ride 1'},
      {id: 2, name: 'Ride 2'},
      {id: 3, name: 'Crash 1'},
      {id: 4, name: 'Crash 2'},
      {id: 5, name: 'Tom 1'},
      {id: 6, name: 'Tom 2'},
      {id: 7, name: 'Tom 3'},
      {id: 8, name: 'Tom 4'},
      {id: 9, name: 'Hihat Foot'},
      {id: 10, name: 'Hihat Closed'},
      {id: 11, name: 'Hihat Loose'},
      {id: 12, name: 'Hihat Open'},
      {id: 13, name: 'Kick 1'},
      {id: 14, name: 'Kick 2'},
      {id: 15, name: 'Snare 1'},
      {id: 16, name: 'Snare 2'}
    ]
  }
  pressHandler = (event, padId) => {
    let padIndex = this.state.pads.findIndex(p => {
      return p.id === padId;
    });
    let pad = this.state.pads[padIndex]
    console.log(pad);

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
                  name={i.name}
                  id={i.id}
                  click={(event) => this.pressHandler(event, i.id)}
                />
              })
            }
          </Padsplaceholder>
        </Akai>
      </div>
    )
  }
}



export default App;
