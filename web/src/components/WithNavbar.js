import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'

export default function WithNavbar(props) {
  const { children } = props

  return (
    <main>
      <Navbar />
    </main>
  )
}

WithNavbar.propTypes = {
  children: PropTypes.node.isRequired,
}
