
export default function tryDeleteDebtThunk(uid) {

  return function tryDeleteDebt(dispatch, getState) {

    let debts = getState().debts

    const debtExists = debts.map(debt => debt.uid).includes(uid)

    if (!debtExists)
      return

    dispatch({ 'type': `deleteDebt`, uid })

    debts = getState().debts

    const hasEmptyDebts = debts.some(
      debt => debt.apr === `` && debt.owed === `` && debt.monthly === ``
    )

    if (!hasEmptyDebts)
      dispatch({ 'type': `addDebt` })
  }
}
