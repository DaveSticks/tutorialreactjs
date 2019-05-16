/* @flow */

import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          Tareas {/* Aquí llamamos el valor de la prop
                                título pasado en App.js */}
          <span className='badge badge-pill badge-light ml-2'>
            {this.props.lengthTareas}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navigation;
