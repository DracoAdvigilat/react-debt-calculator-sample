
export default function trySetPrioritizationThunk(method) {

  return function trySetPrioritization(dispatch) {

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
