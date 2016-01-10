
export default function tryDeleteDebt(uid) {

  return function(dispatch, getState) {

    const debts = getState().debts

    const debtExists = debts.map(debt => debt.uid).includes(uid)

    if (!debtExists)
      return null

    dispatch({ 'type': `deleteDebt`, uid })

    const hasEmptyDebts = debts.some(
      debt => debt.apr === null && debt.owed === null && debt.monthly === null
    )

    if (!hasEmptyDebts)
      dispatch({ 'type': `addDebt` })
  }
}
