
import React from 'react'

import { connect } from 'react-redux'

import trySetPrioritization from '../../../store/actions/options/trySetPrioritization'

function mapStateToProps(state) {

  return {
    'selected': state.options.prioritization,
  }
}

const mapDispatchToProps = {
  'handleChangePrioritization': trySetPrioritization,
}

class Prioritization extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const handleChangePrioritization = event =>
      this.props.handleChangePrioritization(event.target.value)

    return (
      <div className="prioritizationDiv">
        <p>{`Prioritization`}</p>
        <select onChange={handleChangePrioritization} value={this.props.selected}>
          <option value="HIGHEST_APR">{`Highest APR`}</option>
          <option value="LOWEST_OWED">{`Lowest owed`}</option>
          <option value="AS_ENTERED">{`As listed`}</option>
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prioritization)
