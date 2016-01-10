
export default function monthlyPayment(
  state = null,
  action
) {

  switch (action.type) {

    case `setMonthlyPayment`: {

      return action.amount
    }

    default:
      return state
  }
}
