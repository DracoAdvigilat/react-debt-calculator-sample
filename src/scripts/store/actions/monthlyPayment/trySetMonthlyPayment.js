
const roundToTwoDecimals = num => Number(`${Math.round(`${num}e+2`)}e-2`)

export default function trySetMonthlyPayments(requestedAmount) {

  return function(dispatch, getState) {

    let amount

    if (requestedAmount === ``)
      amount = null
    else {

      amount = Number(requestedAmount)

      if (isNaN(amount))
        return

      amount = roundToTwoDecimals(amount)

      if (amount < 0.0)
        return

    }

    dispatch({ 'type': `setMonthlyPayment`, amount })
  }
}
