
export default function monthlyPayment(
  state = ``,
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
