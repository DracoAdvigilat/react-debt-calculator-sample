
import React from 'react'

import Debts from './debts/debts'
import TotalOwed from './totalOwed/totalOwed'
import Options from './options/options'
import MonthlyPayment from './monthlyPayment/monthlyPayment'
import PayoffMessage from './payoffMessage/payoffMessage'

export default class DebtCalculator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div id="debtContainer" className="debtContainer">

        <header>
          {`Debt Repayment Calculator`}
        </header>
        <p className="instructionsP">
          {`Enter the amount owed, APR, and minimum monthly payment for each debt.`}
        </p>
  
        <Debts />
        <TotalOwed />
        <Options />
        <MonthlyPayment />
        <PayoffMessage />

        <p className="disclaimerP">
          {`Disclaimer: Every loan is different. While this tool provides a reasonable estimation, it can not account for all fees, charges, policies, and other possibilities. For a full debt repayment analysis, consult a financial planner.`}
        </p>
      </div>
    )
  }
}
