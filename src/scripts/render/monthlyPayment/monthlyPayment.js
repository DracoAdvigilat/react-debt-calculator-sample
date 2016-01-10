
import React from 'react'

import { connect } from 'react-redux'

import trySetMonthlyPayment
  from '../../store/actions/monthlyPayment/trySetMonthlyPayment'

function mapStateToProps(state) {

  return {
    'monthlyPayment': state.monthlyPayment,
  }
}

const mapDispatchToProps = {
  'handleChangeMonthlyPayment': trySetMonthlyPayment,
}

class MonthlyPayment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const handleChangeMonthlyPayment = event =>
      this.props.handleChangeMonthlyPayment(event.target.value)

    return (
      <div className="paymentsDiv">
        <p className="paymentP">{`Monthly Payments`}</p>
        <input
          type="text"
          placeholder="Enter Here"
          className="paymentInput"
          onChange={handleChangeMonthlyPayment}
          value={this.props.monthlyPayment}
        />
      </div>
    )
  }
}

MonthlyPayment.propTypes = {
  'handleChangeMonthlyPayment': React.PropTypes.func.isRequired,
  'monthlyPayment'            : React.PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyPayment)
