import React, { Fragment, Component } from 'react';

import Particles from 'react-particles-js';

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {

      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      direction: "none",
      random: true,
      straight: false,
      speed: 1,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        totateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 150,
        size: 0,
        duration: 3,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.3
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  // config_demo: {
  //   hide_card: false,
  // }
}

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <div className="container_App">
          <Particles className="particles"
            params={particlesOptions} 
          />

          
        </div>
      </Fragment>
    );
  }
}

export default App;
