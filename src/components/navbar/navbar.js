import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navmenu from './navmenu'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Navmenu format="navmenu"/>
      </nav>
    )
  }
}

export default connect()(Navbar)