
export default function tryDeleteDebt(uid) {

  return function(dispatch, getState) {

    let debts = getState().debts

    const debtExists = debts.map(debt => debt.uid).includes(uid)

    if (!debtExists)
      return

    dispatch({ 'type': `deleteDebt`, uid })

    debts = getState().debts

    const hasEmptyDebts = debts.some(
      debt => debt.apr === null && debt.owed === null && debt.monthly === null
    )

    if (!hasEmptyDebts)
      dispatch({ 'type': `addDebt` })
  }
}
