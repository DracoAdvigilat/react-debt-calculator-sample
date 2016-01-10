
import React from 'react'

import { connect } from 'react-redux'

const hundredYearsInMonths = 1200
const FOREVER = -1

const roundToTwoDecimals = num => Number(`${Math.round(`${num}e+2`)}e-2`)

function getSortedDebts(state) {

  const debts = state.debts
  const prioritizationMethod = state.prioritization

  // Filter by all debts that have a positive amount owed
  // Then create a copy with true numbers instead of strings
  const owedDebts = debts
    .filter(debt => Number(debt.owed) > 0)
    .map(debt => ({
      'owed'   : Number(debt.owed),
      'apr'    : Number(debt.apr),
      'monthly': Number(debt.monthly),
    }))

  switch (prioritizationMethod) {

    case `HIGHEST_APR`:
      // b - a results in highest first sorting
      owedDebts.sort((a, b) => b.apr - a.apr)
      break

    case `LOWEST_OWED`:
      // a - b results in lowest first sorting
      owedDebts.sort((a, b) => a.owed - b.owed)
      break

    case `AS_ENTERED`:
      // Nothing to do
      break

    // no default
  }

  return owedDebts
}

function getStillOwed(debts) {

  const hasPaidDebts = debts.some(debt => debt.owed === 0)

  // Avoid creating a new array if we don't have to
  if (!hasPaidDebts)
    return debts

  const stillOwed = debt => debt.owed > 0

  return debts.filter(stillOwed)
}

function getMonthsToPayDebts(state) {

  const monthlyPayment = Number(state.monthlyPayment)
  const allDebts = state.debts
  const allocationMethod = state.options.allocation

  // Don't even bother calculating if we're not paying
  if (monthlyPayment === 0)
    return 0

  const allMonthly = allDebts.reduce((total, debt) => total + Number(debt.monthly), 0)

  // We're not even covering the monthly minimum! It would take forever
  if (monthlyPayment < allMonthly)
    return FOREVER

  let debts = getSortedDebts(state)

  let months = 0

  while (debts.length && months < hundredYearsInMonths) {

    // Track how many months of paying this will take
    months++

    // Calculate interest
    for (let i = 0; i < debts.length; i++) {
      const debt = debts[i]

      const monthlyInterest = 1.0 + (debt.apr / 1200.0)

      debt.owed *= monthlyInterest
      debt.owed = roundToTwoDecimals(debt.owed)
    }

    // Determine surplus over monthly minimum, if any
    const monthlyTotal = debts.reduce((total, debt) => total + debt.monthly, 0)
    let surplus = monthlyPayment - monthlyTotal

    // Handle minimum monthly payments first
    debts.forEach(debt => {

      const payment = debt.monthly
      const remaining = debt.owed

      if (remaining < payment)
        surplus += (payment - remaining)

      debt.owed = Math.max(debt.owed - payment, 0.0)
    })

    // Remove debts that are fully paid
    debts = getStillOwed(debts)

    while (surplus > 0.0 && debts.length) {

      let funds
      let fundsRemaining
      let totalOwed

      let payment

      // Out-of-loop surplus payment information setup
      switch (allocationMethod) {

        case `EVEN_SPLIT`:

          payment = roundToTwoDecimals(surplus / debts.length)
          surplus = 0.0
          break

        case `PRIORITY_FIRST`:
          // Nothing to do here
          break

        case `PROPORTIONAL_SPLIT`: {

          funds = surplus
          fundsRemaining = surplus
          surplus = 0.0

          totalOwed = debts.reduce((total, debt) => total + debt.owed, 0)
          break
        }

        // no default
      }

      // Main payment loop
      debts.forEach(debt => {

        // In-loop surplus payment information setup
        switch (allocationMethod) {

          case `EVEN_SPLIT`:
            // Nothing to do here
            break

          case `PRIORITY_FIRST`:

            payment = surplus
            surplus = 0.0
            break

          case `PROPORTIONAL_SPLIT`:

            // Allocate funds proportional to the size of the amount owed
            payment = funds * (debt.owed / totalOwed)

            // Force payment to two decimals
            payment = roundToTwoDecimals(payment)

            // Ensure we aren't trying to pay more than we have
            payment = Math.min(payment, fundsRemaining)

            // Remove this payment from our available funds
            fundsRemaining -= payment
            break

          // no default
        }

        // If the payment is more than owed, add the extra to surplus
        surplus += Math.max(payment - debt.owed, 0.0)

        // Pay the debt
        debt.owed = Math.max(debt.owed - payment, 0.0)
      })

      // Remove debts that are fully paid
      debts = getStillOwed(debts)
    }
  }

  return months
}

function mapStateToProps(state) {

  let monthlyPayment = state.monthlyPayment

  if (monthlyPayment !== ``)
    monthlyPayment = Number(monthlyPayment).toFixed(2)

  const debts = state.debts
  const totalMonthly = debts.reduce((total, debt) => total + Number(debt.monthly), 0).toFixed(2)
  
  const monthsToPay = getMonthsToPayDebts(state)

  let paymentMessage = ``

  if (monthlyPayment === null || monthsToPay === 0)
    paymentMessage = ``

  else if (monthsToPay === FOREVER)
    paymentMessage = `Be sure to enter an amount at least as high as the total minimum monthly payment of ${totalMonthly}.`

  else if (monthsToPay >= hundredYearsInMonths)
    paymentMessage = `By paying ${monthlyPayment} every month, it will take over 100 years to pay off all of your debts!`

  else {

    const message = []

    const monthsInYear = 12

    const years = Math.floor(monthsToPay / monthsInYear)
    const months = monthsToPay % monthsInYear

    message.push(`By paying ${monthlyPayment} every month, it will take roughly `)

    if (years > 0)
      message.push(`${years} year${years > 1 ? `s` : ``} `)

    if (years > 0 && months > 0)
      message.push(`and `)

    if (months > 0)
      message.push(`${months} month${months > 1 ? `s` : ``} `)

    message.push(`to pay off all of your debts.`)

    paymentMessage = message.join(``)
  }

  return { paymentMessage }
}

export default class PayoffMessage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <p className="payoffMessageP">{this.props.paymentMessage}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(PayoffMessage)
