
import React from 'react'

import { connect } from 'react-redux'

function mapStateToProps(state) {

  const debts = state.debts

  let totalOwed = debts.reduce((total, debt) => total + Number(debt.owed), 0)

  totalOwed = totalOwed.toFixed(2)
  
  return {
    totalOwed,
  }
}

class TotalOwed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <p>
          {`Total owed:`}
          <span>
            {this.props.totalOwed}
          </span>
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TotalOwed)
