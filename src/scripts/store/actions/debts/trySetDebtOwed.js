
export default function trySetDebtOwedThunk(uid, amount) {

  return function trySetDebtOwed(dispatch, getState) {

    const key = `owed`

    let debts = getState().debts

    const debtExists = debts.map(debt => debt.uid).includes(uid)

    if (!debtExists)
      return

    if (amount.match(/^\d*\.?\d{0,2}$/) === null)
      return
    
    dispatch({ 'type': `changeDebt`, uid, key, 'value': amount })

    debts = getState().debts

    const hasEmptyDebts = debts.some(
      debt => debt.apr === `` && debt.owed === `` && debt.monthly === ``
    )

    if (!hasEmptyDebts)
      dispatch({ 'type': `addDebt` })
  }
}
