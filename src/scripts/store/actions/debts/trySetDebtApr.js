
export default function trySetDebtAprThunk(uid, amount) {

  return function trySetDebtApr(dispatch, getState) {

    const key = `apr`

    let debts = getState().debts

    const debtExists = debts.map(debt => debt.uid).includes(uid)

    if (!debtExists)
      return

    if (amount.match(/^\d*\.?\d*$/) === null)
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
