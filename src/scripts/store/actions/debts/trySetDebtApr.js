
export default function trySetDebtApr(uid, requestedAmount) {

  return function(dispatch, getState) {

    const key = `apr`

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
