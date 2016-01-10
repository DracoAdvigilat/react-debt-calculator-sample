
const usedUids = new Set()

function getNewUid() {
  const counter = 0
  const limit = 10000000

  // There's no reason this should ever happen. Ever. But just in case...
  while (counter < limit) {

    const newUid = Math.random().toString(36).substr(2, 9)

    if (!usedUids.has(newUid)) {

      usedUids.add(newUid)
      return newUid
    }
  }

  throw new Error(`getNewUid(): Failed over ${limit} times to find a new unique id.Statistically, this makes no sense. Something's broken.`)
}

function getNewDebt() {
  return {
    'uid'    : getNewUid(),
    'owed'   : ``,
    'apr'    : ``,
    'monthly': ``,
  }
}

export default function debts(
  state = [
    getNewDebt(),
  ],
  action
) {

  switch (action.type) {

    case `addDebt`: {

      return [
        ...state,
        getNewDebt(),
      ]
    }

    case `deleteDebt`: {

      return state.filter(debt => debt.uid !== action.uid)
    }

    case `changeDebt`: {

      return state.map(debt => {

        if (debt.uid !== action.uid)
          return debt

        const newValue = {}

        newValue[action.key] = action.value

        return Object.assign({}, debt, newValue)
      })
    }

    default:
      return state
  }
}
