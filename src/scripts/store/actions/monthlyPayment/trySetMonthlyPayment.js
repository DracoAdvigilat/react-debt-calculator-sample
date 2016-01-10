
export default function trySetMonthlyPaymentThunk(amount) {

  return function trySetMonthlyPayment(dispatch) {

    if (amount.match(/^\d*\.?\d{0,2}$/) === null)
      return

    dispatch({ 'type': `setMonthlyPayment`, amount })
  }
}
