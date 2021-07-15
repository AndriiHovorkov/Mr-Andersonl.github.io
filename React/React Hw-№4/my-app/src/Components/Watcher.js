import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Watcher extends PureComponent {
  state = {
    x: null,
    y: null,
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    return this.props.children({
      x: this.state.x,
      y: this.state.y,
    });
  }
}

export default Watcher;

Watcher.propTypes = {
  children: PropTypes.func.isRequired,
};

Watcher.defaultProps = {};