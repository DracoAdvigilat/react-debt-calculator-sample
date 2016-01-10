
export default function trySetMonthlyPayments(amount) {

  return function(dispatch, getState) {

    if (amount.match(/^\d*\.?\d{0,2}$/) === null)
      return

    dispatch({ 'type': `setMonthlyPayment`, amount })
  }
}
