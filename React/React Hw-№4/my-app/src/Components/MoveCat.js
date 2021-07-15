import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

import { cats } from "./icons";
import Cat from "./Cat";
import Watcher from "./Watcher";

class MoveCat extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {

    return (
      <Watcher>{
        ({x, y}) => cats.map(c => (
          <Cat
            key={c.id}
            x={x}
            y={y}
            defaultX={c.startX}
            defaultY={c.startY}
            speed={c.speed}
            delay={c.delay}
          >{c.icon}</Cat>
        ))
      }</Watcher>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    this.log("componentWillUnmount");
  }
}

export default MoveCat;

MoveCat.propTypes = {

};

MoveCat.defaultProps = {

};