
import React from 'react'

import { connect } from 'react-redux'

import trySetAllocation from '../../../store/actions/options/trySetAllocation'

function mapStateToProps(state) {

  return {
    'selected': state.options.allocation,
  }
}

const mapDispatchToProps = {
  'handleChangeAllocation': trySetAllocation,
}

class Allocation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const handleChangeAllocation = event => {
      this.props.handleChangeAllocation(event.target.value)
    }

    return (
      <div className="allocationDiv">
        <p>{`Allocation`}</p>
        <select onChange={handleChangeAllocation} value={this.props.selected}>
          <option value="PRIORITY_FIRST">{`Priority first`}</option>
          <option value="EVEN_SPLIT">{`Even split`}</option>
          <option value="PROPORTIONAL_SPLIT">{`Proportional split`}</option>
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Allocation)
