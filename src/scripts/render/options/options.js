
import React from 'react'

import Allocation from './allocation/allocation'
import Prioritization from './prioritization/prioritization'

export default class Options extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="selectsContainerDiv">
        <Allocation />
        <Prioritization />
      </div>
    )
  }
}
