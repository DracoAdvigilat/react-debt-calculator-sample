
import React from 'react'

import { connect } from 'react-redux'

import tryDeleteDebt from '../../store/actions/debts/tryDeleteDebt'
import trySetDebtOwed from '../../store/actions/debts/trySetDebtOwed'
import trySetDebtApr from '../../store/actions/debts/trySetDebtApr'
import trySetDebtMonthly from '../../store/actions/debts/trySetDebtMonthly'

function mapStateToProps(state) {

  return {
    'debts': state.debts,
  }
}

const mapDispatchToProps = {
  'handleClickDelete'  : tryDeleteDebt,
  'handleChangeOwed'   : trySetDebtOwed,
  'handleChangeApr'    : trySetDebtApr,
  'handleChangeMonthly': trySetDebtMonthly,
}

class Debts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    console.log(this.props.debts)

    const debts = this.props.debts.map(debt => {

      const uid = debt.uid
      const owed = debt.owed
      const apr = debt.apr
      const monthly = debt.monthly

      const handleClickDelete = () =>
        this.props.handleClickDelete(uid)

      const handleChangeOwed = event =>
        this.props.handleChangeOwed(uid, event.target.value)
      
      const handleChangeApr = event =>
        this.props.handleChangeApr(uid, event.target.value)

      const handleChangeMonthly = event =>
        this.props.handleChangeMonthly(uid, event.target.value)

      return (
        <tr id={uid} key={uid}>
          <td>
            <button className="deleteColumn" onClick={handleClickDelete}>
              {`X`}
            </button>
          </td>
          <td>
            <input
              type="text"
              placeholder="Owed"
              className="inputColumn"
              onChange={handleChangeOwed}
              value={owed}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="APR"
              className="inputColumn"
              onChange={handleChangeApr}
              value={apr}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Monthly"
              className="inputColumn"
              onChange={handleChangeMonthly}
              value={monthly}
            />
          </td>
        </tr>
      )

    })

    return (
      <table className="debtTable">
        <thead>
          <tr className="headerTr">
            <th className="deleteHeader"></th>
            <th className="inputHeader">{`Owed`}</th>
            <th className="inputHeader">{`APR`}</th>
            <th className="inputHeader">{`Monthly`}</th>
          </tr>
        </thead>
        <tbody>
          {debts}
        </tbody>
      </table>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debts)
