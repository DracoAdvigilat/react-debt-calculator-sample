
const roundToTwoDecimals = num => Number(`${Math.round(`${num}e+2`)}e-2`)

export default function trySetDebtOwed(uid, requestedAmount) {

  return function(dispatch, getState) {

    const key = `owed`

    let debts = getState().debts

    const debtExists = debts.map(debt => debt.uid).includes(uid)

    if (!debtExists)
      return

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
    
    dispatch({ 'type': `changeDebt`, uid, key, 'value': amount })

    debts = getState().debts

    const hasEmptyDebts = debts.some(
      debt => debt.apr === null && debt.owed === null && debt.monthly === null
    )

    if (!hasEmptyDebts)
      dispatch({ 'type': `addDebt` })
  }
}
