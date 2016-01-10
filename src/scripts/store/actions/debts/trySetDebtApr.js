
export default function trySetDebtApr(uid, requestedAmount) {

  return function(dispatch, getState) {

    const key = `apr`

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
