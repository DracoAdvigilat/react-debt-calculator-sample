
const roundToTwoDecimals = num => Number(`${Math.round(`${num}e+2`)}e-2`)

export default function trySetMonthlyPayments(requestedAmount) {

  return function(dispatch, getState) {

    if (requestedAmount === ``)
      return { 'type': `setMonthlyPayment`, 'amount': null }

    let amount = Number(requestedAmount)

    if (isNaN(amount))
      return null

    amount = roundToTwoDecimals(amount)

    if (amount < 0.0)
      return null

    return { 'type': `setMonthlyPayment`, amount }
  }
}
