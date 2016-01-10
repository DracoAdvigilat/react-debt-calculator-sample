
const roundToTwoDecimals = num => Number(`${Math.round(`${num}e+2`)}e-2`)

export default function trySetDebtMonthly(uid, requestedAmount) {

  return function(dispatch, getState) {

    const key = `monthly`

    const debts = getState().debts

    const debtExists = debts.map(debt => debt.uid).includes(uid)

    if (!debtExists)
      return null

    let amount

    if (requestedAmount === ``)
      amount = null

    else {

      amount = Number(requestedAmount)

      if (isNaN(amount))
        return null

      amount = roundToTwoDecimals(amount)
      
      if (amount < 0.0)
        return null
      
    }
    
    dispatch({ 'type': `changeDebt`, uid, key, 'value': amount })

    const hasEmptyDebts = debts.some(
      debt => debt.apr === null && debt.owed === null && debt.monthly === null
    )

    if (!hasEmptyDebts)
      dispatch({ 'type': `addDebt` })
  }
}
