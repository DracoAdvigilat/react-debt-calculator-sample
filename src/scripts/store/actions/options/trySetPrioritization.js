
export default function trySetPrioritization(method) {

  return function(dispatch, getState) {

    switch (method) {

      case `HIGHEST_APR`:
      case `LOWEST_OWED`:
      case `AS_ENTERED`:
        break

      default:
        return
    }

    dispatch({ 'type': `setPrioritizationMethod`, method })
  }
}
