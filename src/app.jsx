import React, { Component } from 'react';
import { render } from 'react-dom';
import Assign from './assign.jsx';
import Nurses from './nurses.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.enter = this.enter.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {
      beds: ['2','4','6','8A','8B','1A','1B','10A','10B','3A'
      ,'3B','12A','12B','5A','5B','14A','14B','7A','7B','16A','16B'
      ,'9A','9B','18A','18B','11A','11B','20A','20B','22A','22B','22C'
      ,'22D','15A','15B','15C','17A','17B','19A','19B','21A','21B','24A'
      ,'24B','24C','23A','23B','26A','26B','26C','25A','25B','27A','27B'
      ,'29A','29B','31A','31B','28A','28B','28C','30A','30B','33A','33B'
      ,'32A','32B','35A','35B','34A','34B','37A','37B','36A','36B','39A'
      ,'39B','38A','38B','41A','41B','40A','40B','43A','43B','42A','42B'
      ,'45A','45B','47A','47B','46A','46B','44A','44B','44C','48A','48B'],
      occupied: {},
      census: 98,
      view: '',
      emptyBeds: {},
      nurses: {}
    };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    $.get('/nurses').then((data) => {
      this.setState({nurses: data});
    });
  }

  enter(event) {
    if(event.keyCode === 13) {
      let value = event.target.value;

      if (value.slice(0, 3).toLowerCase() === 'add') {
        value = value.split(' ');
        const obj = {
          name: value[1],
          role: value[2]
        };
        const post = $.ajax({
          method: 'POST',
          url: '/nurse',
          data: obj
        });
        post.then(() => {
          this.refresh();
        });

      } else if (value.slice(0, 5).toLowerCase() === 'empty') {
        let emptyBeds = value.toUpperCase().split(' ');
        emptyBeds.shift();
        const occupied = remove(emptyBeds, this.state.beds);
        const census = occupied.length;
        const obj = {
          occupied: occupied,
          census: census,
          emptyBeds: emptyBeds,
          views: 'assign'
        };
        console.log('object', obj);
        this.setState({
          occupied: occupied,
          census: census,
          emptyBeds: emptyBeds,
          views: 'assign'
        });
        console.log('state emptybeds', this.state.emptyBeds);
        console.log('state occupied', this.state.occupied);
        console.log('census', this.state.census, 'views ', this.state.views);
        console.log('beds length', this.state.beds.length);
      } else this.setState({view: value});
    }

    function remove(emptyBeds, beds) {
      return beds.filter(el => {
        if (emptyBeds.indexOf(el) < 0) return true;
      });
    }
  }

  render() {
    switch (this.state.view) {
      case 'nurses':
        return (
          <div>
            <Nurses enter={this.enter} nurses={this.state.nurses}/>
          </div>
        );
      default:
        return (
          <div>
            <Assign
              enter={this.enter}
              beds={this.state.beds}
              emptyBeds={this.state.emptyBeds}
              occupied={this.state.occupied}
              census={this.state.census}
            />
          </div>
        )
    }
  }
}

render(<App />, document.getElementById('content'));
